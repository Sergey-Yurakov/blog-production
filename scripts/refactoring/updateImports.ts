import { Project } from 'ts-morph';

const project = new Project({});

// добавляем файлы с ts и tsx расширением
// ts-morph рекурсивно по ним проходит
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// после рекурсии получаем файлы как обычный объект и можем уже по ним пройтись
const files = project.getSourceFiles();

function isAbsolute(value: string) {
    // массив слоев, по которым проверяем
    const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];

    // проверяем, чтобы импорт находился в одном из слоев
    return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
    // получаем ноды импорта из ast дерева
    const importDeclarations = sourceFile.getImportDeclarations();

    // проходим циклом по всем нодам импорта
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            // когда условие true, то надо обновить импорт
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

// после каких-либо изменений, надо сделать save
project.save();
