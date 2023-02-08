import { classNames as cn } from "shared/lib/classNames/classNames";
import cl from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={cn(cl.navbar, {}, [className])}>

            <div className={cl.links} >
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/'}
                >Главная
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.RED}
                    to={'/about'}
                >О нас
                </AppLink>
            </div>
        </div>
    )
}
