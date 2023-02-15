import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';

const App = () => {
    const { theme } = useTheme();

    useEffect(() => {
        if (Math.random() > 0.5) {
            throw new Error();
        }
    }, []);

    return (
        <div className={cn('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
