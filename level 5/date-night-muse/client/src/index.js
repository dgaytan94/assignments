import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import MuseProvider from './context/MuseProvider.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MuseProvider>
            <App /> 
        </MuseProvider>
    </BrowserRouter>
);