import React, { useState } from 'react';
import Taskbar from './taskbar/Taskbar';
import Desktop from './desktop/Desktop';
import Login from './Login';
const Wrapper = () => {
    const [ startbar, setstartbar ] = useState(false);
    const [ windowsOpen, setWindowsOpen ] = useState(true);
    const [ minimize, setMinimize ] = useState(false);
    const [ loggedOn, setLoggedOn ] = useState(true);

    if (loggedOn) {
        return (
            <React.Fragment>
                <Taskbar
                    minimize={minimize}
                    setMinimize={setMinimize}
                    windowsOpen={windowsOpen}
                    setstartbar={setstartbar}
                    startbar={startbar}
                />
                <Desktop
                    windowsOpen={windowsOpen}
                    setWindowsOpen={setWindowsOpen}
                    startbar={startbar}
                    setstartbar={setstartbar}
                    setMinimize={setMinimize}
                    minimize={minimize}
                    setLoggedOn={setLoggedOn}
                />
            </React.Fragment>
        );
    } else {
        return <Login setLoggedOn={setLoggedOn} />;
    }
};

export default Wrapper;
