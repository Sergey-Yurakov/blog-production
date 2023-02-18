import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cl from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cl.Navbar, {}, [className])}>

            <div className={cl.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                >
                    {t('Главная') }
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.RED}
                    to="/about"
                >
                    {t('О нас') }
                </AppLink>
            </div>
        </div>
    );
};
