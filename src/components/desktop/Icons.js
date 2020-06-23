import React from 'react';

const Icons = ({ setWindowsOpen }) => {
    return (
        <div className='icons'>
            <div className='icon' onClick={() => setWindowsOpen(1)}>
                <img src='./icons/windowsXP/folder.png' />
                <span>New Folder</span>
            </div>
        </div>
    );
};

export default Icons;
