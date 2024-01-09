import React, { useState } from 'react';
import { fetchUser } from '../utils/Api';
import { useMenu } from '../context/SidebarContext';

const Header = () => {
    const [loginData, setLoginData] = useState([]);
    const { navigationHandler } = useMenu("");

    const userHandler = async () => {
        try {
            const result = await fetchUser();
            setLoginData(result.results);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    return (
        <header className='border-b border-gray-300 py-4 min-h-20 flex items-center'>
            <div className='max-w-screen-xl mx-auto px-4 w-full'>
                <div className='flex justify-between items-center'>
                    <button className='' onClick={navigationHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    {loginData.length > 0 && loginData[0].login ? (
                        <p>{loginData[0].login.username}</p>
                    ) : (
                        <button className='px-7 py-2.5 bg-purple-500 text-white rounded-md' onClick={userHandler}>
                            Login
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
