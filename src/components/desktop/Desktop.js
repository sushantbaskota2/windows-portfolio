import React from 'react';
import Icons from './Icons';
import Window from './window/Window';
import StartBar from './StartBar';

const Desktop = ({ setLoggedOn, minimize, setMinimize, startbar, setstartbar, windowsOpen, setWindowsOpen }) => {
    return (
        <div
            className='desktop'
            onClick={() => {
                setstartbar(false);
            }}
        >
            <Icons
                setMinimize={setMinimize}
                minimize={minimize}
                setWindowsOpen={setWindowsOpen}
                windowsOpen={windowsOpen}
            />
            <Window
                minimize={minimize}
                setMinimize={setMinimize}
                setWindowsOpen={setWindowsOpen}
                windowsOpen={windowsOpen}
            />
            <StartBar startbar={startbar} setLoggedOn={setLoggedOn} />
        </div>
    );
};

export default Desktop;
