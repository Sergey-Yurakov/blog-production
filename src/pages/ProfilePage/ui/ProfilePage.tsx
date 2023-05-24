import { memo } from 'react';

import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page data-testid="ProfilePage" className={cn('', {}, [className])}>
            <VStack gap="16">
                <EditableProfileCard id={id!} />
            </VStack>
        </Page>
    );
});

export default ProfilePage;
