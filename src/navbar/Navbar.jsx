import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="space-grotesk pt-10 max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="flex gap-3 items-center">
                    <img
                        src="/Star.png"
                        className="w-9 h-9 object-cover"
                        alt="Positivus Logo"
                    />
                    <h1 className="text-3xl font-semibold">Positivus</h1>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 text-md">
                    <a href="#about" className="hover:text-gray-600">About us</a>
                    <a href="#services" className="hover:text-gray-600">Services</a>
                    <a href="#use-cases" className="hover:text-gray-600">Use Cases</a>
                    <a href="#pricing" className="hover:text-gray-600">Pricing</a>
                    <a href="#blog" className="hover:text-gray-600">Blog</a>
                </div>

                {/* Button */}
                <div className="hidden md:block">
                    <button className="border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-all">
                        Request a quote
                    </button>
                </div>

                {/* Hamburger */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 text-md">
                    <a href="#about" onClick={closeMenu}>About us</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#use-cases" onClick={closeMenu}>Use Cases</a>
                    <a href="#pricing" onClick={closeMenu}>Pricing</a>
                    <a href="#blog" onClick={closeMenu}>Blog</a>
                    <button
                        onClick={closeMenu}
                        className="border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-all mt-2"
                    >
                        Request a quote
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
