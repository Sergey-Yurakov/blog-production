import { memo } from 'react';

import { useSelector } from 'react-redux';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { getArticleDetailData } from '../../../model/selectors/articleDetails';
import { renderArticleBlock } from '../renderArticleBlock';

import cl from './ArticleDetailsDeprecated.module.scss';

export const ArticleDetailsDeprecated = memo(() => {
    const article = useSelector(getArticleDetailData);

    return (
        <>
            <HStack max justify="center">
                <Avatar size={200} src={article?.img} className={cl.avatar} />
            </HStack>

            <Text
                data-testid="ArticleDetails.Text"
                className={cl.title}
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
            />
            <VStack gap="4" max data-testid="ArticleDetails.Info">
                <HStack gap="8">
                    <Icon Svg={EyeIcon} className={cl.icon} />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack gap="8">
                    <Icon Svg={CalendarIcon} className={cl.icon} />

                    <Text text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
});
