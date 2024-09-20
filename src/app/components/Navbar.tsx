"use client";
import { FC, useEffect, useState } from 'react';

const Navbar: FC = () => {
    const [showNavbarButton, setShowNavbarButton] = useState(false);
    const handleScroll = () => {
        const infoSection = document.getElementById('info');
        const subInfoSection = document.getElementById('subinfo');
        const infoTop = infoSection?.getBoundingClientRect().top || 0;
        const subInfoTop = subInfoSection?.getBoundingClientRect().top || 0;

        if (infoTop <= window.innerHeight && subInfoTop <= window.innerHeight) {
            setShowNavbarButton(true);
        } else {
            setShowNavbarButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (  
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 py-1">
            <div className="container mx-auto flex justify-between items-center p-5">
                <h1 className="text-2xl font-bold text-customPurple">TestPro</h1>
                { showNavbarButton && (
                    <button className="bg-customPurple text-white px-4 py-2 rounded-md">Get Started</button>
                )}
            </div>
        </div>
        </nav>
    );
};

export default Navbar;

