import path from 'path';

import { Project } from 'ts-morph';

const project = new Project({});

// добавляем файлы с ts и tsx расширением
// ts-morph рекурсивно по ним проходит
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// после рекурсии получаем файлы как обычный объект и можем уже по ним пройтись
const files = project.getSourceFiles();

// получаем путь к shared слою
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);

// получаем в виде массива вложенные папки компонентов (AppLink, Avatar и т.д.), внутри shared/ui
const componentsDir = sharedUiDirectory?.getDirectories();

function isAbsolute(value: string) {
    // массив слоев, по которым проверяем
    const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];

    // проверяем, чтобы импорт находился в одном из слоев
    return layers.some((layer) => value.startsWith(layer));
}

componentsDir?.forEach((directory) => {
    // из каждой папки берем путь и добавляем туда /index.ts
    // пример /Users/sergeyyurakov/Desktop/React/ULBI_course/src/shared/ui/StarRating/index.ts
    const indexFilePath = `${directory.getPath()}/index.ts`;

    // проверяем, есть ли уже файл index.ts
    // если такого файла нет, то вернется undefined
    const indexFile = directory.getSourceFile(indexFilePath);

    if (!indexFile) {
        // создаем код, который потом передаем в index.ts
        const sourceCode = `export * from'./${directory.getBaseName()}';`;

        // создаем файл и передаем туда путь и код
        const file = directory.createSourceFile(indexFilePath, sourceCode, {
            overwrite: true,
        });

        // сохраняем файл в системе самой
        file.save();
    }
});

files.forEach((sourceFile) => {
    // получаем ноды импорта из ast дерева
    const importDeclarations = sourceFile.getImportDeclarations();

    // проходим циклом по всем нодам импорта
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();

        // если есть alias, то заменяем его на пустую строку
        const valueWithoutAlias = value.replace('@/', '');

        // разделяем путь на сегменты по /
        // пример [shared, ui]
        const segments = valueWithoutAlias.split('/');

        // проверяем, является ли у нас слой и слайс - shared
        const isSharedLayer = segments?.[0] === 'shared';
        const isUiSlice = segments?.[1] === 'ui';

        // console.log(segments);

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
            // сплитим строку по слэшу, удаляем лишнее и снова превращаем в строку
            const value = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

// после каких-либо изменений, надо сделать save
project.save();
