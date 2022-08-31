import React from 'react';
import { Counter } from './components/Counter/Counter';
import { DeveloperList } from './components/Developers/DeveloperList';
import { Feedback } from './components/Feedback/Feedback';

export const App = () => {
    return (
        <>
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm text-color-white" />
            </header>

            <main className="container-sm">
                <Counter />

                <Feedback />

                <DeveloperList />
            </main>

            <footer>footer</footer>
        </>
    );
};
