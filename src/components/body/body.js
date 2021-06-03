import React from 'react';
import './body.css';

import MainHeader from './mainheader';
import MainCards from './maincards';

function Body() {
    return (
        <div className="maintl">
            <MainHeader/>
            <MainCards/>
        </div>
    )
}

export default Body;
