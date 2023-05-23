import { Project, SyntaxKind } from 'ts-morph';

import { featureState, removedFeatureName } from './argsFromFunction';
import { replaceComponent, isToggleComponent } from './replaceComponent';
import { isToggleFunction, replaceToggleFunction } from './replaceToggleFunction';

// проверки на входные аргументы
if (!removedFeatureName) {
    throw new Error('Укажите название фича-флага');
}

if (!featureState) {
    throw new Error('Укажите состояние фичи (on или off)');
}

if (featureState !== 'off' && featureState !== 'on') {
    throw new Error('Некорректное значение состояния фичи (on или off)');
}

const project = new Project({});

// добавляем файлы с ts и tsx расширением
// ts-morph рекурсивно по ним проходит
project.addSourceFilesAtPaths('src/**/*.tsx');
project.addSourceFilesAtPaths('src/**/*.ts');

// после рекурсии получаем файлы как обычный объект и можем уже по ним пройтись
const files = project.getSourceFiles();

files.forEach((sourceFile) => {
    // обходим всех потомков
    sourceFile.forEachDescendant((node) => {
        // ищем ноду по определенному узлу
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node);
        }

        if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
            replaceComponent(node);
        }
    });
});

// после каких-либо изменений, надо сделать save
project.save();
