import { classNames as cn } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();

    return (
        <Page className={cn('', {}, [className])}>
            <VStack gap="16">
                <EditableProfileCard id={id!} />
            </VStack>
        </Page>
    );
});

export default ProfilePage;
