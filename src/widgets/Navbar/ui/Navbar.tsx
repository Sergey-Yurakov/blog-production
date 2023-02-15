import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cl from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={cn(cl.Navbar, {}, [className])}>

        <div className={cl.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
            >
                Главная
            </AppLink>

            <AppLink
                theme={AppLinkTheme.RED}
                to="/about"
            >
                О нас
            </AppLink>
        </div>
    </div>
);
