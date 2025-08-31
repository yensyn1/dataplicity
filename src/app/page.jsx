"use client";

import Image from "next/image";
import WaLink from "./Components/WhatsappWaLink";
import EmblaCarousel from "./Components/EmblaCarousel";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Softwares = [
    <div
        className="flex justify-center items-center bg-amber-400 min-h-96 h-[30w] relative backdrop-opacity-5"
        style={{
            background: `url('/imagenesSoftwareMenosClaras/Slide1.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    ></div>,
    <div
        className="flex justify-center items-center bg-red-500 min-h-96 h-[30w]"
        style={{
            background: `url('/imagenesSoftwareMenosClaras/Slide2.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    ></div>,
    <div
        className="flex justify-center items-center bg-blue-500 min-h-96 h-[30w]"
        style={{
            background: `url('/imagenesSoftwareMenosClaras/Slide3.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    ></div>,
];

function LandingPage() {
    const [Informacion, setInformacion] = useState("softDev"); //mobDev, webDev

    return (
        <main className="m-0">
            <section className="mb-8 relative">
                <h1 className="absolute z-10 h4 top-6">Brindamos Soluciones Innovadoras</h1>
                <EmblaCarousel slides={Softwares} options={{ align: "start", loop: true, draggable: false, dragFree: false }} />
            </section>
            <section>
                <h1 className="text-center mb-10 h1">Nuestros Proyectos</h1>
                {/* Contenedor de los softwares a la venta */}
                <div className="flex flex-wrap w-screen justify-center gap-10 mb-10">
                    {/* Desarrollo de Aplicaciones WEB */}
                    <div className="flex flex-col gap-5">
                        <h2
                            className={`p-3 rounded-2xl hover:cursor-pointer transition-colors duration-300 body-lg text-center ${Informacion === "webDev" ? "bg-red-600" : "bg-green-500"}`}
                            onClick={() => {
                                setInformacion("webDev");
                            }}
                        >
                            Desarrollo de Aplicaciones Web
                        </h2>
                        <div className="self-center">
                            <Image src={"/imagenesSoftwareDevelop/imagenesSoftwareDevelop/4.webp"} width={300} height={300} alt="Imagen Aplicaciones web" className="rounded-2xl" />
                        </div>
                    </div>
                    {/* Desarrollo de Software */}
                    <div className="flex flex-col gap-5">
                        <h2
                            className={`p-3 rounded-2xl hover:cursor-pointer transition-colors duration-300 body-lg text-center ${Informacion === "softDev" ? "bg-red-600" : "bg-green-500"}`}
                            onClick={() => {
                                setInformacion("softDev");
                            }}
                        >
                            Desarrollo de Software
                        </h2>
                        <div className="self-center">
                            <Image src={"/imagenesSoftwareDevelop/imagenesSoftwareDevelop/13.webp"} width={300} height={300} alt="Imagen Aplicaciones web" className="rounded-2xl" />
                        </div>
                    </div>
                    {/* Desarrollo de Aplicaciones Moviles */}
                    <div className="flex flex-col gap-5">
                        <h2
                            className={`p-3 rounded-2xl hover:cursor-pointer transition-colors duration-300 body-lg text-center ${Informacion === "mobDev" ? "bg-red-600" : "bg-green-500"}`}
                            onClick={() => {
                                setInformacion("mobDev");
                            }}
                        >
                            Desarrollo Aplicaciones Moviles
                        </h2>
                        <div className="self-center">
                            <Image src={"/imagenesSoftwareDevelop/imagenesSoftwareDevelop/10.webp"} width={300} height={300} alt="Imagen Aplicaciones web" className="rounded-2xl" />
                        </div>
                    </div>
                </div>
                {/* Contenido con explicacion dinamica de cada que este seleccionado */}
                {Informacion === "softDev" && (
                    <div>
                        <h5 className="text-center h5">Desarrollo de Software</h5>
                        <div className="w-full flex bg-red-500 justify-center items-center">
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, rerum. Error hic qui aperiam. Modi atque, odit commodi aliquam veniam maiores. Cupiditate magni,
                                reprehenderit dolor nemo nostrum magnam dolore vel?
                            </p>
                        </div>
                    </div>
                )}
                {Informacion === "mobDev" && (
                    <div>
                        <h5 className="text-center h5">Desarrollo de Mobile</h5>
                        <div className="w-full flex bg-red-500 justify-center items-center">
                            <p className="text-center">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eos explicabo rerum quis quia repellat, quam odio id repudiandae pariatur odit accusantium earum minima
                                quaerat nesciunt veritatis? Ipsa, totam accusantium.
                            </p>
                        </div>
                    </div>
                )}
                {Informacion === "webDev" && (
                    <div>
                        <h5 className="text-center h5">Desarrollo de Web</h5>
                        <div className="w-full flex bg-red-500 justify-center items-center">
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe repellendus laboriosam odio consequatur id totam enim quia in quidem autem voluptatem praesentium,
                                earum laudantium excepturi dolorum quos distinctio. Ab.
                            </p>
                        </div>
                    </div>
                )}
            </section>
            <section className=""></section>
        </main>
    );
}

export default LandingPage;
