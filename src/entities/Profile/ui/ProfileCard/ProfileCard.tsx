import { ToggleFeatures } from '@/shared/lib/features';

import {
    ProfileCardDeprecated,
    ProfileCardDeprecatedError,
    ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardProps } from '../ProfileCardProps/ProfileCardProps';
import {
    ProfileCardRedesigned,
    ProfileCardRedesignedError,
    ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export const ProfileCard = (props: ProfileCardProps) => {
    const { isLoading, error } = props;

    if (isLoading) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<ProfileCardDeprecatedLoader />}
                on={<ProfileCardRedesignedSkeleton />}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<ProfileCardDeprecatedError />}
                on={<ProfileCardRedesignedError />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ProfileCardDeprecated {...props} />}
            on={<ProfileCardRedesigned {...props} />}
        />
    );
};
