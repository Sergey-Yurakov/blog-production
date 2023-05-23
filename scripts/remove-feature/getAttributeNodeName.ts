import { JsxAttribute } from 'ts-morph';

export const getAttributeNodeName = (jsxAttributes: JsxAttribute[], name: string) => {
    return jsxAttributes.find((node) => node?.getName() === name);
};
