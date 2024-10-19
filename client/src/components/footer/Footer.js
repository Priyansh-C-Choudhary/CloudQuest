import React from 'react';
import FooterDescription from './FooterDescription';
import FooterContactButton from './FooterContactButton';

const Footer = () => {
    return (
        <footer className="text-center bg-blue-500 text-white py-6">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <FooterDescription />
                <FooterContactButton />
            </div>
        </footer>
    );
};

export default Footer;
