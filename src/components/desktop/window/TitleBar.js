import React from 'react';

const TitleBar = ({ setWindowsOpen, setMinimize }) => {
    return (
        <div className='titlebar'>
            <div className='title'>
                <span className='title'>Sushant Baskota</span>
            </div>
            <div className='buttons'>
                <div className='button minimize' onClick={() => setMinimize(true)}>
                    <span />
                </div>
                <div className='button stop' onClick={() => setWindowsOpen(false)}>
                    <span>X</span>
                </div>
            </div>
        </div>
    );
};

export default TitleBar;
