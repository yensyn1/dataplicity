"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../styles/header.css";

function Footer() {
    const pathname = usePathname();
    return (
        <footer className="flex flex-wrap justify-center w-full gap-10  mt-10 bg-[#0d0d0d] text-white py-10 border-t-1 border-[#333]">
            <section className="flex flex-col gap-1 text-center self-center">
                <Link href={"/"} className={pathname === "/" ? " text-white CurrentLink" : "notCurrentLink"}>
                    Inicio
                </Link>
                <Link href={"/Servicios"} className={pathname === "/Servicios" ? "text-white CurrentLink" : "notCurrentLink"}>
                    Servicios
                </Link>
                <Link href={"/contacto"} className={pathname === "/Contacto" ? "text-white CurrentLink" : "notCurrentLink"}>
                    Contacto
                </Link>
            </section>

            <h1 className="self-end">&copy; DataPlicity Todos los derechos reservados 2025</h1>

            <Link href={"/"} className="hover:scale-110 transition-all duration-200 delay-100">
                <Image src={"/logo.png"} width={120} height={120} alt="Logo de Dataplicity" className="drop-shadow-2xl " />
            </Link>
        </footer>
    );
}

export default Footer;
