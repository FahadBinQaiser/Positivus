import React from "react";

const Navbar = () => {
    return(
        <>
            <div className="navbar space-grotesk pt-10 max-w-5xl mx-auto flex justify-between items-center p-4">
                <div className="leftSide flex gap-3 justify-center items-center">
                    <img src="/Star.png" className="w-9 h-w-9 object-cover" alt="Positivus Festival Logo" />
                    <h1 className="text-3xl font-semibold">Positivus</h1>
                </div>
            </div>
        </>
    )
}
export default Navbar;
