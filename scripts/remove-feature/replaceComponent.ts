import { JsxAttribute, Node, SyntaxKind } from 'ts-morph';

import { featureState, removedFeatureName } from './argsFromFunction';
import { getAttributeNodeName } from './getAttributeNodeName';

const toggleComponentName = 'ToggleFeatures';

export function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

    return identifier?.getText() === toggleComponentName;
}

function getReplacedComponent(attribute?: JsxAttribute) {
    const value = attribute?.getFirstDescendantByKind(SyntaxKind.JsxExpression)?.getExpression()?.getText();

    if (value?.startsWith('(')) {
        return value?.slice(1, -1);
    }

    return value;
}

export const replaceComponent = (node: Node) => {
    // получаем массив
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    // потом уже по названию ключа получаем значение из JsxAttribute
    const onAttribute = getAttributeNodeName(attributes, 'on');
    const offAttribute = getAttributeNodeName(attributes, 'off');

    const featureNameAttribute = getAttributeNodeName(attributes, 'feature');
    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1);

    if (featureName !== removedFeatureName) return;

    // первый способ получить содержимое JsxAttribute
    const offValue = getReplacedComponent(offAttribute);

    // второй способ получить содержимое JsxAttribute
    // const onValue = onAttribute?.getFirstDescendantByKind(SyntaxKind.JsxSelfClosingElement);
    const onValue = getReplacedComponent(onAttribute);

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue);
    }

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue);
    }
};
