import React from 'react';
import TitleBar from './TitleBar';
import Body from './Body';

const Window = ({ windowsOpen, setWindowsOpen }) => {
    return (
        <div className='modal' style={windowsOpen <= 0 ? { display: 'none' } : {}}>
            <TitleBar setWindowsOpen={setWindowsOpen} />
            <Body />
        </div>
    );
};

export default Window;
