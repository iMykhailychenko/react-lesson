import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { Profile } from './components/profile/profile';
import { Header } from './components/header/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <Profile />
    </React.StrictMode>,
);
