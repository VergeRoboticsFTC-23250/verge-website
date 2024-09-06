"use client";
import Image from "next/image"
import chassis from '@/public/images/Chassis.png'
import { FlipWords } from "@/components/ui/flip-words";
import CardSkeleton from "@/components/ui/card-skeleton";
import { ArrowRight, CodeSlash, Tools } from "react-bootstrap-icons";
import { PiHandshakeFill } from "react-icons/pi";

import outreach from "@/public/images/Outreach.jpg";
import fundraise from "@/public/images/Fundraise.jpg";
import document from "@/public/images/Document.jpg";
import weUseJava from "@/public/images/WeUseJava.png";
import chassisBento from "@/public/images/ChassisBento.png";
import { ArrowUpRight, Github, RefreshCcw } from "@geist-ui/icons";
import Link from "next/link";
import { MacbookScrollDemo } from "@/components/ui/macbook-scroll";
import { motion } from "framer-motion";

import sketch1 from "@/public/images/Sketch1.jpg";
import sketch2 from "@/public/images/Sketch2.jpg";
import sketch3 from "@/public/images/Sketch3.jpg";
import sketch4 from "@/public/images/Sketch4.jpg";
import cad1 from "@/public/images/CAD1.jpg";
import manufacture1 from "@/public/images/Manufacture1.jpg"
import build1 from "@/public/images/Build1.jpg";
import test1 from "@/public/images/Test1.jpeg";

export default function HomePage() {
  return (
    <main className="w-screen flex flex-col items-center pb-20 p-6 overflow-clip">
      <div className="h-screen w-screen relative overflow-clip select-none">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-row items-center justify-center h-screen w-screen overflow-clip -z-10 -translate-y-[2vw]">
          <Image src={chassis} alt="Chassis" className="w-screen h-screen object-contain scale-75" />
          <div className="absolute h-[65vh] aspect-square bg-gradient-to-b from-transparent from-10% to-black"></div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center h-screen w-screen overflow-clip z-10 translate-y-[14vw]">
          <div className="flex items-center justify-center h-[15vw]">
            <h1 className={` 
              bg-gradient-to-br from-[#c86666]/80 via-[#E73845]/80 via-35% to-[#690a00]/80 text-transparent bg-clip-text
              text-[20vw] font-bold translate-x-[.5vw] translate-y-[.8vw] tracking-wider font-mont`}>VERGE</h1>
          </div>
          <h2 className="text-[2vw] transition-all">We strive to<FlipWords words={["innovate.", "win.", "learn.", "connect.", "teach.", "share."]} /></h2>
        </div>
      </div>
      <div className="max-w-7xl w-full mt-24">
        <div className="w-full grid grid-cols-3 gap-6">
          <CardSkeleton className="aspect-square">
            <div className="px-8 py-6 flex flex-col justify-end h-full">
              <div className="w-full h-full flex justify-evenly items-center">

                <div className="relative border-[1px] border-primary/20 bg-neutral-900/50 rounded-full h-20 w-20 flex items-center justify-center animate-float">
                  <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full border-[3px] border-primary blur-[8px] rounded-full"></div>
                  <PiHandshakeFill className="h-10 w-10 translate-y-1" />
                </div>

                <div className="relative border-[1px] border-primary/20 bg-neutral-900/50 rounded-full h-20 w-20 flex items-center justify-center animation-delay-400 transition-all animate-float">
                  <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full border-[3px] border-primary blur-[8px] rounded-full"></div>
                  <Tools className="h-8 w-8" />
                </div>

                <div className="relative border-[1px] border-primary/20 bg-neutral-900/50 rounded-full h-20 w-20 flex items-center justify-center animation-delay-800 transition-all animate-float">
                  <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full border-[3px] border-primary blur-[8px] rounded-full"></div>
                  <CodeSlash className="h-10 w-10" />
                </div>

              </div>
              <h3 className={`mt-4 w-full text-center`}>About Us</h3>
              <p className="mt-2 w-full text-center pb-2">Verge, team #23250, is an award winning <Link className="text-primary font-medium" href="https://www.firstinspires.org/robotics/ftc" target="_blank">FIRST Tech Challenge</Link> robotics team. We splits tasks between business, mechanical, and programming subteams.</p>
            </div>
          </CardSkeleton>
          <CardSkeleton className="col-span-2 group">
            <div className="pointer-events-none select-none absolute flex items-end justify-end top-0 left-0 right-0 bottom-0 w-full h-full overflow-clip rounded-2xl">
              <div className="w-96 h-6 rounded-l-full bg-primary blur-[96px]"></div>
              <div className="w-6 h-48 rounded-t-full bg-primary blur-[96px]"></div>
            </div>
            <div className="pointer-events-none select-none absolute flex items-end top-0 left-0 right-0 bottom-0 w-full h-full overflow-clip rounded-2xl">
              <div className="w-6 h-48 rounded-t-full bg-primary blur-[96px]"></div>
              <div className="w-96 h-6 rounded-r-full bg-primary blur-[96px]"></div>
            </div>
            <div className="p-6 flex flex-col h-full w-full relative overflow-clip">
              <div className="flex space-x-2 text-neutral-400">
                <PiHandshakeFill className="h-6 w-6 translate-y-0.5" />
                <p className="text-xl">Business Team</p>
              </div>
              <h3>Multi-Talented Backbone</h3>
              <div className="absolute w-full h-full top-0 right-0 left-0 bottom-0 flex items-end justify-center space-x-8">

                <button className="hover:scale-105 relative w-52 h-72 translate-y-16 rounded-2xl translate-x-16 group-hover:translate-x-0 -rotate-12 group-hover:rotate-0 group-hover:translate-y-12 transition-all duration-300 ease-in-out">
                  <div className="w-full flex justify-center">
                    <div className="text-lg font-medium mb-1 text-neutral-300 absolute z-30 m-2 rounded-2xl px-2.5 backdrop-blur-sm border border-neutral-600 bg-neutral-800/20">Fundraise</div>
                  </div>
                  <div className="absolute w-full h-full border-[16px] border-primary blur-2xl group-hover:blur-md group-hover:border-primary/40 transition-all duration-300 rounded-2xl z-0"></div>
                  <div className="relative border-[1px] border-neutral-700 rounded-2xl w-full h-full overflow-clip">
                    <div className="absolute w-full h-full border-[40px] border-black/90 blur-lg z-20 scale-y-[115%] scale-x-[122%] bg-black/30"></div>
                    <Image src={fundraise} alt="Fundraise" className="absolute w-full h-full object-cover rounded-2xl z-10 -translate-y-4" />
                  </div>
                </button>

                <button className="hover:scale-105 relative w-52 h-72 translate-y-8 rounded-2xl group-hover:rotate-0 group-hover:translate-y-12 transition-all duration-300 ease-in-out z-10 shadow-black shadow-2xl">
                  <div className="w-full flex justify-center">
                    <div className="text-lg font-medium mb-1 text-neutral-300 absolute z-30 m-2 rounded-2xl px-2.5 backdrop-blur-sm border border-neutral-600 bg-neutral-800/20">Outreach</div>
                  </div>
                  <div className="absolute w-full h-full border-[16px] border-primary blur-2xl group-hover:blur-md group-hover:border-primary/40 transition-all duration-300 rounded-2xl z-0"></div>
                  <div className="relative border-[1px] border-neutral-700 rounded-2xl w-full h-full overflow-clip">
                    <div className="absolute w-full h-full border-[40px] border-black/90 blur-lg z-20 scale-y-[115%] scale-x-[122%] bg-black/30"></div>
                    <Image src={outreach} alt="Outreach" className="absolute w-full h-full object-cover rounded-2xl z-10" />
                  </div>
                </button>

                <button className="hover:scale-105 relative w-52 h-72 translate-y-16 rounded-2xl -translate-x-16 group-hover:translate-x-0 rotate-12 group-hover:rotate-0 group-hover:translate-y-12 transition-all duration-300 ease-in-out">
                  <div className="w-full flex justify-center">
                    <div className="text-lg font-medium mb-1 text-neutral-300 absolute z-30 m-2 rounded-2xl px-2.5 backdrop-blur-sm border border-neutral-600 bg-neutral-800/20">Document</div>
                  </div>
                  <div className="absolute w-full h-full border-[16px] border-primary blur-2xl group-hover:blur-md group-hover:border-primary/40 transition-all duration-300 rounded-2xl z-0"></div>
                  <div className="relative border-[1px] border-neutral-700 rounded-2xl w-full h-full overflow-clip">
                    <div className="absolute w-full h-full border-[40px] border-black/90 blur-lg z-20 scale-y-[115%] scale-x-[122%] bg-black/30"></div>
                    <Image src={document} alt="Outreach" className="absolute w-full h-full object-cover rounded-2xl z-10 -translate-y-8" />
                  </div>
                </button>

              </div>
            </div>
          </CardSkeleton>
          <CardSkeleton className="col-span-2 group">
            <div className="relative flex flex-col p-6 w-full h-full items-end justify-end rounded-2xl overflow-clip">
              <div className="absolute h-full w-full z-10 top-0 left-0">
                <Image src={chassisBento} alt="Old Chassis" className="w-full h-full object-cover" />
              </div>

              <div className="flex space-x-2 text-neutral-400 relative z-30">
                <Tools className="mt-0.5 h-5 w-5 translate-y-0.5" />
                <p className="text-xl">Mechanical Team</p>
              </div>
              <h3 className="relative z-30">Plan First, Then Build.</h3>
            </div>
          </CardSkeleton>
          <CardSkeleton className="aspect-square group">
            <div className="flex flex-col p-6 h-full overflow-clip">
              <div className="flex mb-2 space-x-2 text-neutral-400">
                <CodeSlash className="mt-0.5 h-5 w-5 translate-y-0.5" />
                <p className="text-xl">Programming Team</p>
              </div>
              <h3 className="">Reliable Code, Open to All.</h3>
              <div className="text-neutral-400 flex items-center mt-2">
                <div className="text-xl -translate-y-0.5">See our work on</div>
                <div className="relative flex items-center group-hover:w-24 w-20 transition-all duration-300 rounded-full px-1.5 py-0.5 border border-primary font-medium text-primary ml-2">
                  <div className="absolute h-full w-full border-4 group-hover:border-8 transition-all duration-300 border-primary blur-xl scale-x-[113%] scale-y-[104%] top-0 left-0 right-0 bottom-0 rounded-full"></div>
                  <div className="absolute h-full w-full bg-neutral-900/60 top-0 left-0 rounded-full"></div>
                  <Github size={16} className="relative z-20 w-4 h-4" />
                  <p className="pl-1 text-sm relative z-20 text-primary">GitHub</p>
                  <ArrowUpRight size={16} className="relative z-20 w-0 group-hover:w-4 transition-all duration-300" />
                </div>
              </div>
              <div className="h-full flex items-end">
                <div className="relative">
                  <div className="absolute border-[8px] w-full h-full rounded-2xl blur-lg scale-y-[110%] scale-x-[105%] border-neutral-600 z-0"></div>
                  <Image src={weUseJava} alt="We Use Java" className=" rounded-2xl border border-neutral-600 z-20 relative" />
                </div>
              </div>
            </div>
          </CardSkeleton>
        </div>
      </div>

      <div className="max-w-7xl w-full mt-48">
        <div className="relative mt-16 flex w-full h-[444px] items-center justify-center">
          <div>
            <div className="flex flex-col items-end">
              {Array.from({ length: 10 }, (_, index) => Math.pow(index, 2) / 2).map((n) => (
                <motion.div
                  key={n}
                  viewport={{ once: true }}
                  style={{ width: n / 8 }}
                  initial={{ marginBottom: 0, paddingBottom: 0, }}
                  whileInView={{ marginBottom: n / 3, paddingBottom: n * 2 / 3 + 8 }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="bg-primary/80 rounded-full"
                ></motion.div>
              ))}
              {Array.from({ length: 10 }, (_, index) => Math.pow(index, 2) / 2).reverse().map((n) => (
                <motion.div
                  key={n}
                  viewport={{ once: true }}
                  style={{ width: n / 8 }}
                  initial={{ marginBottom: 0, paddingBottom: 0, }}
                  whileInView={{ marginBottom: n / 3, paddingBottom: n * 2 / 3 + 8 }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="bg-primary/80 rounded-full"
                ></motion.div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="relative w-full h-screen flex flex-col items-center justify-center">

              <div className="relative">
                <motion.div
                  animate={{
                    width: [25, 25, 25, 25, 25, 50, 50, 25]
                  }}
                  transition={{
                    repeat: Infinity,
                    ease: "anticipate",
                    duration: 5
                  }}
                  className="absolute top-[37px] right-[617px] h-[90px] bg-primary"
                />

                <motion.div
                  animate={{
                    height: [89, 89, 89, 89, 89, 130, 130, 89]
                  }}
                  transition={{
                    repeat: Infinity,
                    ease: "anticipate",
                    duration: 5
                  }}
                  className="absolute top-[38px] left-[69px] h-[89px] w-[25px] bg-primary"
                />

                <motion.h2
                  animate={{
                    rotate: [0, 0, 0, 0, 0, 180, 180, 0],
                    translateY: [0, 0, 0, 0, 0, -19, -19, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    ease: "anticipate",
                    duration: 5
                  }}
                  className="absolute top-[28px] left-[121px] text-primary text-9xl font-mont"
                >E</motion.h2>
                <motion.h2
                  animate={{
                    height: [23, 23, 23, 23, 23, 48, 48, 23],
                  }}
                  transition={{
                    repeat: Infinity,
                    ease: "anticipate",
                    duration: 5
                  }}
                  className="absolute bottom-[100px] left-[367px] w-[75px] bg-primary text-9xl font-mont"
                ></motion.h2>

                <motion.div
                  animate={{
                    width: [57, 57, 57, 57, 57, 82, 82, 57],
                  }}
                  transition={{
                    repeat: Infinity,
                    ease: "anticipate",
                    duration: 5
                  }}
                  className="absolute top-[37px] left-[588px]"
                >
                  <div className="w-full h-[22px] bg-primary"></div>
                  <div className="w-full h-[22px] bg-primary mt-[46px]"></div>
                </motion.div>

                <p className="text-xl w-full ml-2">Our design process is</p>
                <h2 className="text-primary text-9xl font-mont"><span className="opacity-0">I</span>T<span className="opacity-0">E</span>RATIVE</h2>
                <p className="text-xl w-full mr-2 text-right -mt-6">so our work is <span className="text-primary font-bold">ALWAYS CHANGING</span>.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            {Array.from({ length: 10 }, (_, index) => Math.pow(index, 2) / 2).map((n) => (
              <motion.div
                key={n}
                viewport={{ once: true }}
                style={{ width: n / 8 }}
                initial={{ marginBottom: 0, paddingBottom: 0, }}
                whileInView={{ marginBottom: n / 3, paddingBottom: n * 2 / 3 + 8 }}
                transition={{ ease: "easeInOut", duration: 2 }}
                className="bg-primary/80 rounded-full"
              ></motion.div>
            ))}
            {Array.from({ length: 10 }, (_, index) => Math.pow(index, 2) / 2).reverse().map((n) => (
              <motion.div
                key={n}
                viewport={{ once: true }}
                style={{ width: n / 8 }}
                initial={{ marginBottom: 0, paddingBottom: 0 }}
                whileInView={{ marginBottom: n / 3, paddingBottom: n * 2 / 3 + 8 }}
                transition={{ ease: "easeInOut", duration: 2 }}
                className="bg-primary/80 rounded-full"
              ></motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-screen w-screen flex items-center justify-center -mb-48 mt-24 relative">
        <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center">
          <h2 className="w-full max-w-7xl mt-32 text-primary text-8xl">Design Process</h2>
        </div>
        <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center">
          <h2 className="w-full max-w-7xl mt-32 text-primary text-8xl"></h2>
        </div>
        <div className="w-[100vw]overflow-clip -rotate-[15deg]">
          <div className="w-full inline-flex flex-nowrap">
            {[0, 1, 2].map(e => (
              <ul key={e} className="flex items-center justify-center animate-infinite-scroll h-full">
                {[sketch4, cad1, manufacture1, build1, test1].map((img, i) => (
                  <li key={i} className="flex h-full items-center">
                    <CardSkeleton className="w-96 p-4">
                      <p className="-mb-1">Step {i + 1}</p>
                      <h3 className="text-4xl mb-2">
                        {
                          i == 0 ? "Sketch" :
                            i == 1 ? "CAD" :
                              i == 2 ? "Manufacture" :
                                i == 3 ? "Build" :
                                  "Test"
                        }
                      </h3>
                      <Image alt={`IMG${i}`} src={img} className={`w-full h-full aspect-video object-cover rounded-2xl ${i != 0 ? "opacity-75" : "opacity-100"}`} />
                    </CardSkeleton>
                    <div className="w-16 h-full flex items-center justify-center">
                      <ArrowRight />
                    </div>
                  </li>
                ))}
                <li className="flex h-full items-center">
                  <CardSkeleton className="w-96 p-4">
                    <p className="-mb-1">Step 6</p>
                    <h3 className="text-4xl mb-2">Repeat</h3>
                    <div className="w-full h-full aspect-video border-2 border-neutral-700 rounded-2xl bg-neutral-900 text-neutral-400 flex-col flex items-center justify-center">
                      <RefreshCcw size={100} />
                      <h3 className="text-4xl">Repeat</h3>
                    </div>
                  </CardSkeleton>
                  <div className="w-16 h-full flex items-center justify-center">
                    <ArrowRight />
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <MacbookScrollDemo />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="w-full h-[8px] -translate-y-[5px] blur-md bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="h-screen"></div>
    </main >
  );
}