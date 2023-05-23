import { Node, SyntaxKind } from 'ts-morph';

import { featureState, removedFeatureName } from './argsFromFunction';

const toggleFunctionName = 'toggleFeatures';

export function isToggleFunction(node: Node) {
    let isToggleFeatures = false;

    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFunctionName) {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

export const replaceToggleFunction = (node: Node) => {
    // получаем первого потомка по типу
    const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

    if (!objectOptions) return;

    // получаем по названию проперти нужный элемент
    const featureNameProperty = objectOptions.getProperty('name');

    const onFunctionProperty = objectOptions.getProperty('on');
    const offFunctionProperty = objectOptions.getProperty('off');

    const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)?.getBody();
    const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)?.getBody();

    const featureName = featureNameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1);

    if (featureName !== removedFeatureName) return;

    if (featureState === 'on') {
        node.replaceWithText(onFunction?.getText() ?? '');
    }

    if (featureState === 'off') {
        node.replaceWithText(offFunction?.getText() ?? '');
    }
};
