import React from "react";

const Navbar = () => {
    return (
        <div className="navbar space-grotesk pt-10 max-w-5xl mx-auto flex justify-between items-center px-4">
            <div className="leftSide flex gap-3 items-center">
                <img
                    src="/Star.png"
                    className="w-9 h-9 object-cover"
                    alt="Positivus Logo"
                />
                <h1 className="text-3xl font-semibold">Positivus</h1>
            </div>

            <div className="hidden md:flex gap-8 text-lg">
                <a href="#about" className="hover:text-gray-600">About us</a>
                <a href="#services" className="hover:text-gray-600">Services</a>
                <a href="#use-cases" className="hover:text-gray-600">Use Cases</a>
                <a href="#pricing" className="hover:text-gray-600">Pricing</a>
                <a href="#blog" className="hover:text-gray-600">Blog</a>
            </div>

            <div>
                <button className="border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-all">
                    Request a quote
                </button>
            </div>
        </div>
    );
};

export default Navbar;
