import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import SearchIcon from '@/shared/assets/icons/search.svg';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Buttton';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Buttton';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';

import cl from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation('comment');
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    if (error) {
        // todo: избавиться потом от div
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <div className={cl.error}>
                        <TextDeprecated
                            text={t(
                                'Произошла ошибка при добавлении комментария',
                            )}
                        />
                    </div>
                }
                on={
                    <div className={cl.error}>
                        <Text
                            variant="error"
                            text={t(
                                'Произошла ошибка при добавлении комментария',
                            )}
                        />
                    </div>
                }
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <HStack
                        className={cn(cl.AddCommentForm, {}, [className])}
                        max
                        gap="8"
                        data-testid="AddCommentForm"
                    >
                        <InputDeprecated
                            className={cl.input}
                            placeholder={t('Введите текст комментария')}
                            value={text}
                            onChange={onCommentTextChange}
                            data-testid="AddCommentForm.Input"
                        />
                        <ButtonDeprecated
                            className={cl.btn}
                            onClick={onSendHandler}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStack>
                }
                on={
                    <Card maxWidth padding="24" border="round">
                        <HStack
                            className={cn(cl.AddCommentFormRedesigned, {}, [
                                className,
                            ])}
                            max
                            gap="16"
                            data-testid="AddCommentForm"
                        >
                            <Input
                                addonLeft={<Icon Svg={SearchIcon} />}
                                className={cl.input}
                                placeholder={t('Введите текст комментария')}
                                value={text}
                                onChange={onCommentTextChange}
                                data-testid="AddCommentForm.Input"
                            />

                            {/* todo: уменьшить тут высоту кнопки, сделать как в
                            инпуте */}
                            <Button
                                className={cl.btn}
                                onClick={onSendHandler}
                                data-testid="AddCommentForm.Button"
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </Card>
                }
            />
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);
