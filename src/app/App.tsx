import './styles/index.scss';

import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames as cn } from "shared/lib/classNames/classNames";
import { AppRouter } from 'app/providers/router';




const App = () => {
    const {theme, togleTheme} = useTheme()

    return (
        <div className={cn('app', {}, [theme])} >

            <button onClick={togleTheme} >toggle theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <AppRouter />
        </div>
    )
}

export default App
