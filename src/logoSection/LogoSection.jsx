import React from "react";

const LogoSection = () => {
    return(
        <>
           <div className="max-w-5xl mx-auto px-8 sm:px-0">
            <div className="flex flex-wrap justify-center md:justify-between gap-8 items-center">
                <img src="/logos/Amazon.png" alt="Amazon" className="h-6" />
                <img src="/logos/dribble.png" alt="Dribbble" className="h-6" />
                <img src="/logos/Hubspot.png" alt="HubSpot" className="h-6" />
                <img src="/logos/notion.png" alt="Notion" className="h-6" />
                <img src="/logos/Netflix.png" alt="Netflix" className="h-6" />
                <img src="/logos/zoom.png" alt="Zoom" className="h-6" />
            </div>
         </div> 
        </>
    )
}
export default LogoSection;