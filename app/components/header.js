"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookOpen, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isBookOpen, setIsBookOpen] = useState(false);

    const toggleBookOpen = () => {
        setIsBookOpen((prevState) => !prevState);
    };

    return (
        <header className='bg-white rounded-lg shadow m-4'>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faNetworkWired} />
                    <h1 className="mx-2">Subnetify</h1>
                </div>
                {/* <div className="flex items-center">
                    <FontAwesomeIcon icon={faBook} className='mx-2' />
                    <div
                        className={`w-10 h-5 flex items-center bg-darkgun rounded-full cursor-pointer`}
                        onClick={toggleBookOpen}
                    >
                        <div
                            className={`bg-white w-4 h-4 mx-0.5 rounded-full shadow-md transition-transform ${
                                isBookOpen ? 'transform translate-x-5' : ''
                            }`}
                        ></div>
                    </div>
                    <FontAwesomeIcon icon={faBookOpen} className='mx-2' />
                </div> */}
            </div>
        </header>
    );
};

export default Header;
