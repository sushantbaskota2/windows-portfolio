import React from 'react';

const TitleBar = ({ setWindowsOpen }) => {
    return (
        <div className='titlebar'>
            <div className='title'>
                <span className='title'>Sushant Baskota</span>
            </div>
            <div className='buttons'>
                <div className='button minimize'>
                    <span />
                </div>
                <div className='button stop' onClick={() => setWindowsOpen(0)}>
                    <span>X</span>
                </div>
            </div>
        </div>
    );
};

export default TitleBar;
