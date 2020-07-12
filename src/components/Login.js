import React from 'react';

const Login = ({ setLoggedOn }) => {
    return (
        <div className='login'>
            <div className='top' />
            <div className='body'>
                <div className='left'>
                    <div>
                        <img src='./icons/windowsXP/windowsXPlogin.png' />
                        <span>To begin, click your username</span>
                    </div>
                </div>

                <div className='right'>
                    <div
                        onClick={() => {
                            setLoggedOn(true);
                        }}
                    >
                        <img src='data:image/jpeg;base64,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' />
                        <span> Sushant Baskota</span>
                    </div>
                </div>
            </div>
            <div className='bottom' />
        </div>
    );
};

export default Login;