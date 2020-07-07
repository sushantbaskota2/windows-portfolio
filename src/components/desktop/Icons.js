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
                <img src='./icons/windowsXP/folder.png' />
                <span>New Folder</span>
            </div>
        </div>
    );
};

export default Icons;
