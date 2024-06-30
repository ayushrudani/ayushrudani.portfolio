import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center ">
        <div>
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1500"
            className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]"
          >
            About Me
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1500"
            className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white"
          >
            My <span className="text-yellow-400">Introduction</span>
          </h2>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1500"
            className="mb-[3rem] flex items-center md:space-x-10"
          >
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              I'm a professional developer in .NET, React, Flutter, and Java,
              developing projects to show off my skills.Committed to non-stop
              studying, I'm curious and passionate about coding and learning new
              technologies..
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/12o5UO-jXHwQ0N-HgEvDB5mEQ1kt07kAi/view?usp=sharing"
            target="blank"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1500"
            className="px-[2rem] hover:bg-transparent  hover:text-yellow-400 hover:border-yellow-400 hover:border-2 transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-yellow-400 text-black flex items-center space-x-2"
          >
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] " />
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1500"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src={"/images/about.jpg"}
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] -top-[2rem] -right-[2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
