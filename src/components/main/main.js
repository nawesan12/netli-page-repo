import React from 'react';
import './main.css';

import Header from '../header/header';
import Aside from '../aside/aside';
import Body from '../body/body';

function Main() {
    return (
        <div className="maindiv">
            <div className="header-container">
                <Header />
            </div>
            <div className="aside-container">
                <Aside/>
            </div>
            <div className="body-container">
                <Body/>
            </div>
        </div>
    )
}

export default Main;
