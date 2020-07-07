import React, { useState } from 'react';
import Contents from './Contents';
import Tab from './Tab';
import { TABS } from '../../../constants';

const Body = () => {
    const [ activeTab, setactiveTab ] = useState(TABS[0]);
    return (
        <div className='body'>
            <div className='tabs'>
                {TABS.map((a) => {
                    const hero = a === activeTab ? true : false;
                    return <Tab title={a} active={hero} setactiveTab={setactiveTab} />;
                })}
            </div>
            <Contents activeTab={activeTab} />
        </div>
    );
};

export default Body;

// <div className='tab active'>Overview</div>
//                 <div className='tab'>Education</div>
//                 <div className='tab'>Experiences</div>
//                 <div className='tab'>Skills</div>
//                 <div className='tab'>Projects</div>
//                 <div className='tab'>Github</div>
