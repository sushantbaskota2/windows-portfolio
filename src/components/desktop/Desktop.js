import React from 'react';
import Icons from './Icons';
import Window from './window/Window';
import StartBar from './StartBar';

const Desktop = ({ startbar, setstartbar, windowsOpen, setWindowsOpen }) => {
    return (
        <div
            className='desktop'
            onClick={() => {
                setstartbar(false);
            }}
        >
            <Icons setWindowsOpen={setWindowsOpen} windowsOpen={windowsOpen} />
            <Window setWindowsOpen={setWindowsOpen} windowsOpen={windowsOpen} />
            <StartBar startbar={startbar} />
        </div>
    );
};

export default Desktop;
