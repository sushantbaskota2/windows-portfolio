import React, { useState } from 'react';
import Taskbar from './taskbar/Taskbar';
import Desktop from './desktop/Desktop';
const Wrapper = () => {
    const [ startbar, setstartbar ] = useState(false);
    const [ windowsOpen, setWindowsOpen ] = useState(0);

    return (
        <React.Fragment>
            <Taskbar windowsOpen={windowsOpen} setstartbar={setstartbar} startbar={startbar} />
            <Desktop
                windowsOpen={windowsOpen}
                setWindowsOpen={setWindowsOpen}
                startbar={startbar}
                setstartbar={setstartbar}
            />
        </React.Fragment>
    );
};

export default Wrapper;
