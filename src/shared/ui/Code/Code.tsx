import { memo, useCallback } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cl from './Code.module.scss';
import CopyIcon from '../../assets/icons/copy-20-20.svg';
import { Button, ButtonTheme } from '../Buttton/Button';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={cn(cl.Code, {}, [className])}>
            <Button
                className={cl.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon
                    className={cl.copyIcon}
                />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
