"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Libertinus_Mono } from "next/font/google";
import HameMenu from "./ham-menu";
import "../styles/header.css";

const DataPlicityFONT = Libertinus_Mono({
    subsets: ["latin"],
    weight: "400",
});
const BREAKPOINT = 1200;

function Header() {
    const pathname = usePathname();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checksize = () => setIsMobile(window.innerWidth < BREAKPOINT);
        checksize();
        window.addEventListener("resize", checksize);
        return () => window.removeEventListener("resize", checksize);
    }, []);
    const HEADERHAM = (
        <header className={`${DataPlicityFONT.className} sticky top-0 z-100 w-full text-black p-4 backgroundColors backdrop-blur-sm`}>
            <div className="flex justify-between gap-15  items-center">
                <Link href={"/"} className="hover:scale-110 transition-all duration-200 delay-100 flex items-center">
                    <Image src={"/logo.png"} width={120} height={120} alt="Logo de Dataplicity" className="drop-shadow-2xl" />
                    <h1 className="heading  text-white">DataPlicity</h1>
                </Link>
                <HameMenu />
            </div>
        </header>
    );
    const HEADERNAV = (
        <header className={`${DataPlicityFONT.className} sticky top-0 z-100 w-full text-black p-4 backgroundColors backdrop-blur-sm`}>
            <div className="flex justify-between gap-15 px-[10%] items-center">
                <Link href={"/"} className="hover:scale-110 transition-all duration-200 delay-100 flex items-center">
                    <Image src={"/logo.png"} width={120} height={120} alt="Logo de Dataplicity" className="drop-shadow-2xl" />
                    <h1 className="heading  text-white">DataPlicity</h1>
                </Link>
                <nav className="navbar flex gap-5 font-bold font-mono">
                    <Link href={"/"} className={pathname === "/" ? "text-white  CurrentLink nav-link" : "notCurrentLink nav-link"}>
                        Inicio
                    </Link>
                    <Link href={"/Servicios"} className={pathname === "/Servicios" ? "text-white CurrentLink nav-link" : "notCurrentLink nav-link"}>
                        Servicios
                    </Link>
                    <Link href={"/Contacto"} className={pathname === "/Contacto" ? "text-white CurrentLink nav-link" : "notCurrentLink nav-link"}>
                        Contacto
                    </Link>
                </nav>
            </div>
        </header>
    );

    return isMobile ? HEADERHAM : HEADERNAV;
}

export default Header;
