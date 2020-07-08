import React from 'react';

const Icons = ({ minimize, setMinimize, setWindowsOpen }) => {
    return (
        <div className='icons'>
            <div
                className='icon'
                onClick={() => {
                    if (minimize) {
                        setMinimize(false);
                    }
                    setWindowsOpen(true);
                }}
            >
                <img src='https://img.icons8.com/bubbles/2x/resume.png' style={{ width: '4rem' }} />
                <span>Resume</span>
            </div>
        </div>
    );
};

export default Icons;
