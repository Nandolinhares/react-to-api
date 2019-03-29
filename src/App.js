import React from 'react';
import Routes from './routes';

import './styles.css';

import Header from './components/Header/index';
import Field from './components/Field';

const App = () => (
    <div className="App">
        <Header/>
        <Field/>
        <Routes/>
    </div>
);

export default App;