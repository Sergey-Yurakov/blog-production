import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isCounterEnabled
const featureState = process.argv[3]; // example on/off

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

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;

    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    // обходим всех потомков
    sourceFile.forEachDescendant((node) => {
        // ищем ноду по определенному узлу
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            // получаем первого потомка по типу
            const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

            if (!objectOptions) return;

            // получаем по названию проперти нужный элемент
            const featureNameProperty = objectOptions.getProperty('name');

            const onFunctionProperty = objectOptions.getProperty('on');
            const offFunctionProperty = objectOptions.getProperty('off');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)?.getBody();
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)?.getBody();

            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== removedFeatureName) return;

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getText() ?? '');
            }

            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getText() ?? '');
            }
        }
    });
});

// после каких-либо изменений, надо сделать save
project.save();
