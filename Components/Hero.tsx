import React from "react";
import Particles from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Hero = () => {
  return (
    <div className=" h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particles />
      <div className="w-[80%] h-full grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] items-center ">
        <div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <h1 className="text-[35px] md:text-[50px] font-bold text-white ">
              Hello, I'm <span className="text-yellow-400">Ayush!</span>
            </h1>

            <TextEffect />
          </motion.div>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-[2rem] text-[20px] text-[#ffffffe2]"
          >
            Indian student and full-stack developer proficient in a variety of
            technologies. With a strong foundation in both frontend and backend
            development.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-[2rem] flex-col scroll-py-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6"
          >
            <button className="px-[2rem] hover:bg-transparent  hover:text-yellow-400 hover:border-yellow-400 hover:border-2 transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-yellow-400 text-black flex items-center space-x-2 z-[10000]">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem]" />
            </button>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-[500px] hidden bg:[#55e6a5] relative lg:flex items-center rounded-full h-[500px]"
        >
          <Image
            src="/images/user.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
