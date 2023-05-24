import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/deprecated/Buttton';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';

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
        return (
            <div className={cl.error}>
                <Text text={t('Произошла ошибка при добавлении комментария')} />
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack className={cn(cl.AddCommentForm, {}, [className])} max gap="8" data-testid="AddCommentForm">
                <Input
                    className={cl.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                    data-testid="AddCommentForm.Input"
                />
                <Button className={cl.btn} onClick={onSendHandler} data-testid="AddCommentForm.Button">
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);
