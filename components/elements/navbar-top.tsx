"use client"

import { CircleX } from "lucide-react";
import { Button } from "../ui/button";

export default function NavbarTop(){

    const handleClose = () => {
        console.log("close");
        var navbartop = document.getElementById("navbar-top");
        if (navbartop != null){
            navbartop.style.display = "none";
        }
        
    }
    
    return (
        <div id="navbar-top" className="h-12 w-full bg-green-100 flex justify-center items-center gap-4 relative">
            <span>This Beautiful Banner is included in Essentials!</span>
            <Button variant="default">Check it Now!</Button>
            <Button onClick={handleClose} className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" variant="ghost"><CircleX/></Button>
        </div>
    )
}