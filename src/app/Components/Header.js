"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
    const pathname = usePathname();
    return (
        <header className="w-full text-black p-4 sticky top-0 backgroundColors backdrop-blur-xs">
            <div className="flex justify-center gap-15 px-[10%] items-center">
                <Link href={"/"} className="hover:rotate-3 transition-all duration-200 delay-100">
                    <Image src={"/logo.png"} width={100} height={300} alt="Logo de Dataplicity" className="drop-shadow-2xl" />
                </Link>
                <nav className="flex gap-5 font-bold font-mono">
                    <Link href={"/"} className={pathname === "/" ? "text-red-400" : "text-[#8dea5c] hover:scale-110 transition-all duration-200"}>
                        Inicio
                    </Link>
                    <Link href={"/Servicios"} className={pathname === "/Servicios" ? "text-red-400" : "text-[#8dea5c] hover:scale-110 transition-all duration-200"}>
                        Servicios
                    </Link>
                    <Link href={"/Contacto"} className={pathname === "/Contacto" ? "text-red-400" : "text-[#8dea5c] hover:scale-110 transition-all duration-200"}>
                        Contacto
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
