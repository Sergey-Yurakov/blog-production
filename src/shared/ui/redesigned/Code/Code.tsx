import { memo, useCallback } from 'react';

import CopyIconDeprecated from '@/shared/assets/icons/copy-20-20.svg';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

import { Button, ButtonTheme } from '../../deprecated/Buttton/Button';
import { Icon } from '../Icon';

import cl from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    // todo: сделать всплывашку для уведомдения, что код скопирован
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <pre className={cn(cl.Code, {}, [className])}>
                    <Button
                        className={cl.copyBtn}
                        theme={ButtonTheme.CLEAR}
                        onClick={onCopy}
                    >
                        <CopyIconDeprecated className={cl.copyIcon} />
                    </Button>
                    <code>{text}</code>
                </pre>
            }
            on={
                <pre className={cn(cl.CodeRedesigned, {}, [className])}>
                    <Icon
                        Svg={CopyIcon}
                        clickable
                        onClick={onCopy}
                        className={cl.copyBtn}
                    />
                    <code>{text}</code>
                </pre>
            }
        />
    );
});
