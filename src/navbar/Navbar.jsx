import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return (
        <div className="navbar space-grotesk pt-10 max-w-5xl mx-auto px-8 sm:px-0">
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img
                        src="/Star.png"
                        className="w-9 h-9 object-cover"
                        alt="Positivus Logo"
                    />
                    <h1 className="text-3xl font-semibold">Positivus</h1>
                </div>

                <div className="hidden md:flex gap-8 text-md">
                    <a href="#about" className="hover:text-gray-600">About us</a>
                    <a href="#services" className="hover:text-gray-600">Services</a>
                    <a href="#use-cases" className="hover:text-gray-600">Use Cases</a>
                    <a href="#pricing" className="hover:text-gray-600">Pricing</a>
                    <a href="#blog" className="hover:text-gray-600">Blog</a>
                </div>

                <div className="hidden md:block">
                    <button className="border cursor-pointer border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-all">
                        Request a quote
                    </button>
                </div>

                <div className="md:hidden">
                    <button className="cursor-pointer z-50" onClick={toggleMenu}>
                        <FiMenu size={24} />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-white flex flex-col items-start px-6 py-6 gap-6 text-md">
                    <div className="w-full flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <img
                                src="/Star.png"
                                className="w-9 h-9 object-cover"
                                alt="Positivus Logo"
                            />
                            <h1 className="text-2xl font-semibold">Positivus</h1>
                        </div>
                        <button onClick={closeMenu} className="cursor-pointer">
                            <FiX size={28} />
                        </button>
                    </div>

                    <a href="#about" onClick={closeMenu} className="pl-2">About us</a>
                    <a href="#services" onClick={closeMenu} className="pl-2">Services</a>
                    <a href="#use-cases" onClick={closeMenu} className="pl-2">Use Cases</a>
                    <a href="#pricing" onClick={closeMenu} className="pl-2">Pricing</a>
                    <a href="#blog" onClick={closeMenu} className="pl-2">Blog</a>

                    <button
                        onClick={closeMenu}
                        className="border cursor-pointer border-black px-6 py-2 mt-2 rounded-lg hover:bg-black hover:text-white transition-all"
                    >
                        Request a quote
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
