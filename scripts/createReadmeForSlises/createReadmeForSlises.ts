import path from 'path';

import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.md');
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// slice : entities, features, pages, widgets

// для запуска скрипта ts-node ./scripts/createReadmeForSlises/createReadmeForSlises.ts

const sliceMap: Record<string, string> = {
    pages: 'Page',
    entities: 'Entity',
    features: 'Feature',
    widgets: 'Widget',
};

const createReadmeForSlice = (slice: string) => {
    if (!Object.keys(sliceMap)
        .includes(slice)) {
        return;
    }

    const slicePaths = path.resolve(__dirname, '..', '..', 'src', `${slice}`);
    const sliceDirectory = project.getDirectory(slicePaths);
    const componentsDirectories = sliceDirectory?.getDirectories();

    componentsDirectories?.forEach((directory) => {
        const readmeFilePath = `${directory.getPath()}/README.md`;
        const readmeFile = directory.getSourceFile((f) => f.getBaseName() === 'README.md');
        if (!readmeFile) {
            const sourceCode = `## ${sliceMap[slice]} ${directory.getBaseName()} is for ...`;
            const file = directory.createSourceFile(readmeFilePath, sourceCode, { overwrite: true });
            file.save();
        }
    });
};

createReadmeForSlice('features');
createReadmeForSlice('entities');
createReadmeForSlice('widgets');
createReadmeForSlice('pages');

project.save();
