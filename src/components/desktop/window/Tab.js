import React from 'react';

const Tab = ({ title, active, setactiveTab }) => {
    return (
        <div className={`tab ${active ? 'active' : ''}`} onClick={() => setactiveTab(title)}>
            {title}
        </div>
    );
};

export default Tab;
