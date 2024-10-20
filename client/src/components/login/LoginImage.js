import React from 'react';

const LoginImage = () => {
    return (
        <div className="w-1/2">
            <img 
                className="hidden object-fill w-3/4 h-screen md:block" 
                src={`${process.env.PUBLIC_URL}/assets/svg/loginDoorIcon.svg`} 
                alt="login icon" 
            />
        </div>
    );
}

export default LoginImage;
