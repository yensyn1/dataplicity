"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Libertinus_Mono } from "next/font/google";
import "../styles/header.css";

const DataPlicityFONT = Libertinus_Mono({
    subsets: ["latin"],
    weight: "400",
});

function Header() {
    const pathname = usePathname();
    return (
        <header className={`${DataPlicityFONT.className} w-full text-black p-4 backgroundColors backdrop-blur-xs`}>
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
}

export default Header;
