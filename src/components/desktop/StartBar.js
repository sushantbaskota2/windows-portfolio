import React, { useState, useEffect } from 'react';

const StartBar = ({ startbar, setLoggedOn }) => {
    const onAnimationEnd = () => {
        if (!startbar) setRender(false);
    };

    const [ shouldRender, setRender ] = useState(startbar);
    useEffect(
        () => {
            if (startbar) setRender(true);
        },
        [ startbar ]
    );
    return (
        shouldRender && (
            <div
                onClick={(e) => e.stopPropagation()}
                className={`startBar ${startbar ? 'active' : ''}`}
                style={{ animationName: `${startbar ? 'fadeInUp' : 'fadeOutDown'}` }}
                onAnimationEnd={onAnimationEnd}
            >
                <div className='top'>
                    <img src='https://avatars3.githubusercontent.com/u/49043517?s=460&u=7c4af2704ee5e490cf8725961f46401afdc98c4e&v=4' />
                    <span>Sushant </span>
                </div>
                <div className='body'>
                    <div className='left'>
                        <span className='header'>Interests</span>

                        <div className='apps'>
                            <div className='app'>
                                <i class='fas fa-code' />
                                <span> Web Development</span>
                            </div>
                            <div className='app'>
                                <i class='fas fa-code' />
                                <span> Coding</span>
                            </div>
                            <div className='app'>
                                <i class='fas fa-code' />
                                <span> Machine Learning</span>
                            </div>
                            <div className='app'>
                                <i class='fas fa-code' />
                                <span>Data Analytics and Visualization</span>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <span className='header'>Hobbies</span>
                        <div className='apps'>
                            <div className='app'>
                                <i class='fas fa-futbol' />
                                <span> Football (Soccer)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div
                        onClick={() => {
                            setLoggedOn(false);
                        }}
                    >
                        <img src='./icons/windowsXP/logoff.jpg' />
                        <span>Logoff</span>
                    </div>
                </div>
            </div>
        )
    );
};

export default StartBar;
