import React from 'react';

import './styles.css';

import Header from './components/Header/index';
import Main from './pages/main/index';

const App = () => (
    <div className="app">
        <Header/>
        <Main/>
    </div>
);

export default App;