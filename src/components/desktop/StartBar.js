import React, { useState, useEffect } from 'react';

const StartBar = ({ startbar }) => {
    const onAnimationEnd = () => {
        if (!startbar) setRender(false);
    };

    const [ shouldRender, setRender ] = useState(startbar);
    console.log(shouldRender, startbar);
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
                    <div className='left'>hero</div>
                    <div className='right'>hero</div>
                </div>
                <div className='bottom'>LOgout</div>
            </div>
        )
    );
};

export default StartBar;
