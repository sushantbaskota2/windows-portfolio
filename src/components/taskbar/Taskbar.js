import React from 'react';

const Taskbar = ({ setMinimize, minimize, windowsOpen, startbar, setstartbar }) => {
    // const createWindows = () => {
    //     const windows = [];
    //     for (let i = 0; i < windowsOpen; i++) {
    //         windows.push(
    //             <React.Fragment key={i}>

    //             </React.Fragment>
    //         );
    //         console.log(windowsOpen);
    //         console.log(windows);
    //     }
    //     return windows;
    // };
    return (
        <div className='taskbar'>
            <div className='start-button' onClick={() => setstartbar(!startbar)}>
                <img src='./icons/windowsXP/logo.png' />
                <span>Start</span>
            </div>
            <div className='app-list-nav'>
                {windowsOpen ? (
                    <div
                        onClick={() => setMinimize(!minimize)}
                        className={`app ${minimize ? 'minimize' : ''}`}
                        key={Math.random()}
                    >
                        <img src='./icons/windowsXP/folder.png' />
                        <span>Resume</span>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div className='statusbar'>
                <div className='icons'>
                    <img src='./icons/windowsXP/sound.png' />
                </div>
                <div className='datetime'>
                    <span>{new Date().toLocaleTimeString()}</span>
                    <span>{new Date().toDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default Taskbar;
