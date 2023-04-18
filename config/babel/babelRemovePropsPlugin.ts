import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                // создаем массив атрибутов, который надо будет выпилить из prod-сборки
                const forbidden = state.opts.props || [];

                // метод traverse для того, чтобы пройти по всем нодам ast-дерева
                path.traverse({
                    // тип ноды (в данном случае JSX элемент)
                    JSXIdentifier(current) {
                        // имя ноды самой
                        const nodeName = current.node.name;

                        // проверяем, содержит ли массив атрибутов имя переданной ноды
                        // аналог nodeName === 'data-testid'
                        if (forbidden.includes(nodeName)) {
                            // если массив содержит нужные ноды, то эти ноды удаляем
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
