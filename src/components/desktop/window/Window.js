import React, { useEffect, useState } from 'react';
import TitleBar from './TitleBar';
import Body from './Body';
// import { useEffect } from 'react';

const Window = ({ minimize, setMinimize, windowsOpen, setWindowsOpen }) => {
    const onAnimationEnd = () => {
        if (!windowsOpen || minimize) setRender(false);
    };

    const [ shouldRender, setRender ] = useState(windowsOpen && !minimize);
    // console.log(shouldRender, windowsOpen);
    useEffect(
        () => {
            if (windowsOpen && !minimize) setRender(true);
        },
        [ windowsOpen, minimize ]
    );

    // console.log(minimize, shouldRender);

    return (
        shouldRender && (
            <div
                className='modal'
                style={{
                    animationName: `${windowsOpen && !minimize ? 'fadeInUp' : 'fadeOutDown'}`,
                    transformOrigin: `${minimize ? 'bottom' : 'top'}`
                }}
                onAnimationEnd={onAnimationEnd}
            >
                <TitleBar setMinimize={setMinimize} setWindowsOpen={setWindowsOpen} />
                <Body />
            </div>
        )
    );
};

export default Window;
