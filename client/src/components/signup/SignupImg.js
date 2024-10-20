import React from 'react';

const SignupImg = () => {
    return (
        <div className="w-1/2">
            <img 
                className="hidden object-fill w-3/4 h-3/4 md:block" 
                src={`${process.env.PUBLIC_URL}/assets/svg/signupAuth.svg`} 
                alt="signup icon" 
            />
        </div>
    );
}

export default SignupImg;
