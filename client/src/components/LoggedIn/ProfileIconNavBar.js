import React from 'react';
import { useContext } from 'react';
import NavStateContext from '../../context/NavStateContext';
import UserInfoContext from '../../context/UserInfoContext';

const ProfileIconNavBar = () => {
    const { setNavIdx } = useContext(NavStateContext);
    const { user } = useContext(UserInfoContext);

    return (
        <>
            <div className="relative cursor-pointer flex flex-row">
                {/* SVG icon removed */}
                
                <div
                    className="flex relative w-12 h-12 bg-blue-500 justify-center items-center my-1 mx-10 text-xl rounded-full text-white"
                    onClick={() => {
                        setNavIdx(8); // Navigate to profile or account info
                    }}
                >
                    {user.firstName[0]}{user.lastName[0]}
                </div>
            </div>
        </>
    );
};

export default ProfileIconNavBar;
