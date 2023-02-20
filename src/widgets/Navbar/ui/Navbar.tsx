import { classNames as cn } from 'shared/lib/classNames/classNames';
import cl from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={cn(cl.Navbar, {}, [className])}>

        <div className={cl.links} />
    </div>
);
