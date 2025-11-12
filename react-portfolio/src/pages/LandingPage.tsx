import { useState } from "react";
import ContextComponent from "../components/ContextComponent"
import NavbarComponent from "../components/NAVIGATION/NavabarComponent";
import MobileNavbar from "../components/NAVIGATION/MobileNavbar";
import UnderConstruction from "../components/UnderContruction";
/**
 * Fabricates the landing page and it's features 
 * @function LandingPage
 * @exports LandingPage
 */

export default function LandingPage(){
    const [selectedSection, setSelectedSection] = useState<string>("home");

    return(
       <>
            <div className="hidden">  {/* Remove when construction is done */}
                <div className="relative min-h-screen flex flex-col justify-between">
                    {/* CONTENT SECTION */}
                    <div className="flex-grow flex items-center justify-center py-4">
                        <ContextComponent selected={selectedSection} />
                    </div>

                    {/* NAVIGATION BAR */}
                    <div className="fixed bottom-30 left-0 w-full z-50">
                        <div>
                            <NavbarComponent onSelect={setSelectedSection} />
                        </div>
                    </div>
                </div>
            </div>

            {/* UNDER CONSTRUCTION */}
            <div className="">
                <UnderConstruction />
            </div>

       </>
       
    )
}