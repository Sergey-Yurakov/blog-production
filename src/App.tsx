import './styles/index.scss';

import { Link, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames as cn } from './helpers/classNames/classNames';



const App = () => {
    const {theme, togleTheme} = useTheme()

    return (
        <div className={cn('app', {}, [theme])} >
            <div className={cn('btn', { 'hover': false, 'active': false }, ['a', 'b'])}>tetete</div>
            <button onClick={togleTheme} >toggle theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>

        </div>
    )
}

export default App
