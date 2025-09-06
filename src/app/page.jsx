"use client";

import CountUp from "./Components/countUp";
import WaLink from "./Components/WhatsappWaLink";
import EmblaCarousel from "./Components/EmblaCarousel";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, Laptop, Cpu } from "lucide-react";

const Softwares = [
    <div
        className="flex justify-center items-center bg-[#333333] slidesEmbla relative backdrop-opacity-5"
        style={{
            background: `url('/imagenesSoftwareMenosClaras/Slide1.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.8",
        }}
    ></div>,
    <div
        className="flex justify-center items-center bg-[#333333] slidesEmbla"
        style={{
            background: `url('/imagenesSoftwareMenosClaras/Slide2.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.8",
        }}
    ></div>,
    <div
        className="flex justify-center items-center bg-[#333333] slidesEmbla"
        style={{
            background: `url('/imagenesSoftwareMenosClaras/Slide3.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.8",
        }}
    ></div>,
];

function LandingPage() {
    const [Informacion, setInformacion] = useState("softDev"); //mobDev, webDev

    return (
        <main className="m-0">
            <section className="mb-8 relative ">
                <div className="flex flex-col absolute z-10 w-full h-full justify-center">
                    <h1
                        className="h3 w-3/4 mb-3 ml-20"
                        style={{
                            textShadow: "0 0 10px black",
                        }}
                    >
                        Brindamos Soluciones Innovadoras
                    </h1>
                    <p
                        className="mb-6 body-lg ml-20"
                        style={{
                            textShadow: "0 0 10px black",
                        }}
                    >
                        Desarrollamos todo tipo de software segun su necesidad
                    </p>
                    <Link href={"/"} className="bg-[#74aa42] flex w-max px-6 ml-20 py-2 rounded-xl h6 hover:scale-105 hover:-translate-y-1 transition-all duration-200">
                        Ver proyectos
                    </Link>
                </div>

                <EmblaCarousel slides={Softwares} options={{ align: "start", loop: true, draggable: false, dragFree: false }} />
            </section>
            <section>
                <h1 className="mb-10 h2 text-center mt-20 px-20">Nuestros Proyectos</h1>
                {/* Contenedor de los softwares a la venta */}
                <div className="flex flex-wrap w-screen justify-center gap-10 mb-10">
                    {/* Desarrollo de Aplicaciones WEB */}
                    <div className="flex flex-col gap-5">
                        <h2
                            className={`p-3 rounded-2xl hover:cursor-pointer transition-all duration-300 body-lg text-center px-10 hover:scale-105  ${
                                Informacion === "webDev" ? "bg-green-600" : "bg-green-800"
                            }`}
                            onClick={() => {
                                setInformacion("webDev");
                            }}
                        >
                            Desarrollo Aplicaciones Web
                        </h2>
                        <div className="self-center bg-[#333] w-full rounded-xl h-80 flex justify-center items-center">
                            <Laptop className="w-3/4 h-3/4" />
                        </div>
                    </div>
                    {/* Desarrollo de Software */}
                    <div className="flex flex-col gap-5">
                        <h2
                            className={`p-3 rounded-2xl hover:cursor-pointer transition-all duration-300 body-lg text-center px-20 hover:scale-105 ${
                                Informacion === "softDev" ? "bg-green-600" : "bg-green-800"
                            }`}
                            onClick={() => {
                                setInformacion("softDev");
                            }}
                        >
                            Desarrollo de Software
                        </h2>
                        <div className="self-center bg-[#333] w-full rounded-xl h-80 flex justify-center items-center">
                            <svg fill="#ffffff" class="w-3/4 h-3/4" viewBox="0 -3 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                <defs>
                                    <clipPath id="screenClip">
                                        <rect x="2" y="2" width="28" height="17" rx="0.5" ry="0.5"></rect>
                                    </clipPath>
                                </defs>

                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>

                                <g id="SVGRepo_iconCarrier">
                                    <path d="M30.000,21.000 L17.000,21.000 L17.000,24.000 L22.047,24.000 C22.600,24.000 23.047,24.448 23.047,25.000 C23.047,25.552 22.600,26.000 22.047,26.000 L10.047,26.000 C9.494,26.000 9.047,25.552 9.047,25.000 C9.047,24.448 9.494,24.000 10.047,24.000 L15.000,24.000 L15.000,21.000 L2.000,21.000 C0.898,21.000 0.000,20.103 0.000,19.000 L0.000,2.000 C0.000,0.897 0.898,0.000 2.000,0.000 L30.000,0.000 C31.103,0.000 32.000,0.897 32.000,2.000 L32.000,19.000 C32.000,20.103 31.103,21.000 30.000,21.000 ZM2.000,2.000 L2.000,19.000 L29.997,19.000 L30.000,2.000 L2.000,2.000 Z"></path>
                                </g>

                                <g clip-path="url(#screenClip)">
                                    <text
                                        x="16"
                                        y="10.5"
                                        text-anchor="middle"
                                        dominant-baseline="middle"
                                        font-size="10"
                                        font-weight="700"
                                        font-family="ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial"
                                        fill="#ffffff"
                                    >
                                        @
                                    </text>
                                </g>
                            </svg>
                        </div>
                    </div>
                    {/* Desarrollo de Aplicaciones Moviles */}
                    <div className="flex flex-col gap-5">
                        <h2
                            className={`p-3 rounded-2xl hover:cursor-pointer transition-all duration-300 body-lg text-center px-8 hover:scale-105 ${
                                Informacion === "mobDev" ? "bg-green-600" : "bg-green-800"
                            }`}
                            onClick={() => {
                                setInformacion("mobDev");
                            }}
                        >
                            Desarrollo Aplicaciones Moviles
                        </h2>
                        <motion.div
                            initial={{ y: 30 }}
                            whileInView={{ y: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
                            className="self-center bg-[#333] w-full rounded-xl h-80 flex justify-center items-center"
                        >
                            <Smartphone className="w-3/4 h-3/4" />
                        </motion.div>
                    </div>
                </div>
                {/* Contenido con explicacion dinamica de cada que este seleccionado */}
                {Informacion === "webDev" && (
                    <motion.div initial={{ opacity: 0.5, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0.5, y: -10 }} transition={{ ease: "easeInOut", duration: 0.5 }}>
                        <div className="w-full flex flex-col justify-center items-center bg-[#436d20] mt-20 py-12">
                            <h5 className="text-center h4">Desarrollo de Web</h5>
                            <p className="text-center flex w-1/2 body-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe repellendus laboriosam odio consequatur id totam enim quia in quidem autem voluptatem praesentium,
                                earum laudantium excepturi dolorum quos distinctio. Ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo doloremque facere eveniet hic deleniti
                                labore dolorem temporibus eligendi et optio. Consequatur ab aut fuga odio nisi earum harum perferendis neque.
                            </p>
                        </div>

                        <section className="mt-16">
                            <h1 className="h4 text-center mb-6">Experiencia de Desarrollo Web</h1>
                            <div className="flex flex-wrap w-full justify-center gap-12">
                                <div className="bg-[#417a11] w-1/5 flex flex-col justify-center items-center rounded-2xl">
                                    <div className="w-max">
                                        <span className="h1 text-center">+</span>
                                        <CountUp from={0} to={20} separator="," direction="up" duration={5} className="count-up-text h1 text-center" />
                                    </div>
                                    <p className="body-lg text-center">Anos de Experiencia</p>
                                </div>
                                <div className="bg-[#417a11] w-1/5 flex flex-col justify-center items-center rounded-2xl">
                                    <div className="w-max">
                                        <span className="h1 text-center">+</span>
                                        <CountUp from={0} to={40} separator="," direction="up" duration={5} className="count-up-text h1 text-center" />
                                    </div>
                                    <p className="body-lg">Proyectos Realizados</p>
                                </div>

                                <div className="bg-[#417a11] w-1/5 flex flex-col justify-center items-center rounded-2xl h-60">
                                    <div className="w-max">
                                        <span className="h1 text-center">+</span>
                                        <CountUp from={0} to={25} separator="," direction="up" duration={5} className="count-up-text h1 text-center" />
                                    </div>
                                    <p className="body-lg">Clientes Satisfechos</p>
                                </div>
                            </div>
                        </section>
                    </motion.div>
                )}
                {Informacion === "softDev" && (
                    <motion.div initial={{ opacity: 0.5, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0.5, y: -10 }} transition={{ ease: "easeInOut", duration: 0.5 }}>
                        <div className="w-full flex flex-col justify-center items-center bg-[#436d20] mt-20 py-12">
                            <h5 className="text-center h4">Desarrollo de Software</h5>
                            <p className="text-center flex w-1/2 body-base">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, doloremque animi! Quo, deserunt magni? Maxime placeat quisquam minima fuga! Eum sapiente voluptatem
                                hic amet, aperiam exercitationem voluptatibus deleniti possimus nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minima voluptates quam, quibusdam
                                maxime possimus iure illum officia quia animi commodi, omnis molestias odio libero itaque quae quidem ex atque?
                            </p>
                        </div>

                        <section className="mt-16">
                            <h1 className="h4 text-center mb-6">Experiencia de Desarrollo de Software</h1>
                            <div className="flex flex-wrap w-full justify-center gap-12">
                                <div className="bg-[#417a11] w-1/5 flex flex-col justify-center items-center rounded-2xl">
                                    <div className="w-max">
                                        <span className="h1 text-center">+</span>
                                        <CountUp from={0} to={20} separator="," direction="up" duration={5} className="count-up-text h1 text-center" />
                                    </div>
                                    <p className="body-lg text-center">Anos de Experiencia</p>
                                </div>
                                <div className="bg-[#417a11] w-1/5 flex flex-col justify-center items-center rounded-2xl">
                                    <div className="w-max">
                                        <span className="h1 text-center">+</span>
                                        <CountUp from={0} to={50} separator="," direction="up" duration={5} className="count-up-text h1 text-center" />
                                    </div>
                                    <p className="body-lg">Proyectos Realizados</p>
                                </div>

                                <div className="bg-[#417a11] w-1/5 flex flex-col justify-center items-center rounded-2xl h-60">
                                    <div className="w-max">
                                        <span className="h1 text-center">+</span>
                                        <CountUp from={0} to={30} separator="," direction="up" duration={5} className="count-up-text h1 text-center" />
                                    </div>
                                    <p className="body-lg">Clientes Satisfechos</p>
                                </div>
                            </div>
                        </section>
                    </motion.div>
                )}
                {Informacion === "mobDev" && (
                    <motion.div initial={{ opacity: 0.5, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0.5, y: -10 }} transition={{ ease: "easeInOut", duration: 0.5 }}>
                        <div className="w-full flex flex-col justify-center items-center bg-[#436d20] mt-20 py-12">
                            <h5 className="text-center h4">Desarrollo de Aplicaciones Moviles</h5>
                            <p className="text-center flex w-1/2 body-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe repellendus laboriosam odio consequatur id totam enim quia in quidem autem voluptatem praesentium,
                                earum laudantium excepturi dolorum quos distinctio. Ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo doloremque facere eveniet hic deleniti
                                labore dolorem temporibus eligendi et optio. Consequatur ab aut fuga odio nisi earum harum perferendis neque.
                            </p>
                        </div>

                        <section className="mt-16">
                            <h1 className="h4 text-center mb-6">Experiencia de Desarrollo Movil</h1>
                            <div className="flex flex-wrap w-full justify-center gap-12">
                                <div className="bg-[#417a11] w-1/5 flex flex-col justify-center items-center rounded-2xl">
                                    <div className="w-max">
                                        <span className="h1 text-center">+</span>
                                        <CountUp from={0} to={10} separator="," direction="up" duration={5} className="count-up-text h1 text-center" />
                                    </div>
                                    <p className="body-lg text-center">Anos de Experiencia</p>
                                </div>
                                <div className="bg-[#417a11] w-1/5 flex flex-col justify-center items-center rounded-2xl">
                                    <div className="w-max">
                                        <span className="h1 text-center">+</span>
                                        <CountUp from={0} to={20} separator="," direction="up" duration={5} className="count-up-text h1 text-center" />
                                    </div>
                                    <p className="body-lg">Proyectos Realizados</p>
                                </div>

                                <div className="bg-[#417a11] w-1/5 flex flex-col justify-center items-center rounded-2xl h-60">
                                    <div className="w-max">
                                        <span className="h1 text-center">+</span>
                                        <CountUp from={0} to={15} separator="," direction="up" duration={5} className="count-up-text h1 text-center" />
                                    </div>
                                    <p className="body-lg">Clientes Satisfechos</p>
                                </div>
                            </div>
                        </section>
                    </motion.div>
                )}
            </section>
        </main>
    );
}

export default LandingPage;
