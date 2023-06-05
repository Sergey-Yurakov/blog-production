import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cl from './ArticleDetailsSkeleton.module.scss';

export const ArticleDetailsSkeleton = () => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <VStack gap="32" max>
                    <SkeletonDeprecated
                        className={cl.avatar}
                        width={200}
                        height={200}
                        border="50%"
                    />
                    <SkeletonDeprecated width={300} height={32} />
                    <SkeletonDeprecated width={600} height={24} />
                    <SkeletonDeprecated width="100%" height={200} />
                    <SkeletonDeprecated width="100%" height={200} />
                </VStack>
            }
            on={
                <VStack gap="16" max>
                    <Skeleton width={189} height={32} />
                    <Skeleton width={325} height={28} />
                    <Skeleton width="100%" height={420} />
                    <Skeleton width="100%" height={300} />
                </VStack>
            }
        />
    );
};
