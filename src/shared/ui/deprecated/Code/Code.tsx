import { memo, useCallback } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';

import CopyIcon from '../../../assets/icons/copy-20-20.svg';
import { Button, ButtonTheme } from '../Buttton/Button';

import cl from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={cn(cl.Code, {}, [className])}>
            <Button className={cl.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <CopyIcon className={cl.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
