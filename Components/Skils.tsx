import React, { useState } from "react";
import CountUp from "react-countup";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaJava,
  FaPython,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaPhp,
} from "react-icons/fa";

import {
  SiAndroidstudio,
  SiCsharp,
  SiDart,
  SiDotnet,
  SiFlutter,
  SiLeaderprice,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiVisualstudio,
} from "react-icons/si";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        stage: "",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaJava />,
          <SiCsharp />,
          <FaPython />,
          <FaC />,
          <SiDart />,
          <FaPhp />,
        ],
      },
      {
        title: "Frame Works",
        stage: "",

        icons: [
          <SiFlutter />,
          <FaBootstrap />,
          <FaReact />,
          <SiDotnet />,
          <SiTailwindcss />,
          <SiNextdotjs />,
          <FaWordpress />,
        ],
      },
      {
        title: "Database",
        stage: "",

        icons: [<SiMysql />, <SiMongodb />],
      },
      {
        title: "Tools",
        stage: "",

        icons: [
          <FaGit />,
          <FaGithub />,
          <SiAndroidstudio />,
          <SiVisualstudio />,
          <SiPostman />,
        ],
      },
    ],
  },

  {
    title: "awards",
    info: [
      {
        title: "Hackerrank Certificates",
        stage: "2021",
        icons: [],
      },
      {
        title: "Code Fest v2.0",
        stage: "2022",
        icons: [],
      },
      {
        title: "Code Gladiators",
        stage: "2023",
        icons: [],
      },
      {
        title: "Google Cloud Badges",
        stage: "2023",
        icons: [],
      },
      {
        title: "Microsoft Learn Badges, Trophies",
        stage: "2023 - 2024",
        icons: [],
      },
      {
        title: "Leetcode Badges",
        stage: "2024",
        icons: [],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Teaching Assistant - Data Structure",
        stage: "2022 - 2023",
        icons: [],
      },
      {
        title: "Teaching Assistant - PHP Core",
        stage: "2023",
        icons: [],
      },
    ],
  },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       // title: "B.Tech In Computer Science - Darshan University",
  //       // stage: "2025",
  //     },
  //   ],
  // },
];

// components
// import Avatar from "../../components/Avatar";
// import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaC } from "react-icons/fa6";

const Skils = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-[#09101a] pt-[4rem] md:pt-[8rem] pb-[5rem]" id="skils">
      {/* <p className="heading">
        My <span className="text-yellow-400">Skills</span>
      </p> */}
      {/* <Circles /> */}

      {/* <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6"> */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto  gap-[3rem] mt-[4rem] text-white ">
        <div className="flex-1 flex flex-col">
          <h2
            data-aos="fade-right"
            data-aos-duration="800"
            className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white"
          >
            My <span className="text-yellow-400">Skills</span>
          </h2>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="mb-[3rem] flex items-center md:space-x-10"
          >
            {/* <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span> */}
            <p className="text-[19px] text-slate-300 w-[80%]">
              I have proficient skills in multiple programming languages,
              including Java, C# and JavaScript. I'm able to write clean,
              efficient code that is easy to understand and maintain.I also have
              strong teaching skill. Gained number of certificates using this
              skills.
            </p>
          </div>
          {/* counter */}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 "
          >
            <div className=" hidden xl:flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-yellow-400 mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xsn uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Year of teaching experience
                </div>
              </div>
              {/* Students */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-yellow-400 mb-2">
                  <CountUp start={0} end={100} duration={5} /> +
                </div>
                <div className="text-xsn uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Students satisfied
                </div>
              </div>
              {/* Cirtificates */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-yellow-400 mb-2">
                  <CountUp start={0} end={150} duration={5} /> +
                </div>
                <div className="text-xsn uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  certificates earned
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex flex-col w-full xl:max-w-[80%] h-[480px] itesc"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 text-left">
            {aboutData.map((item, i) => {
              return (
                <div
                  key={`right-package${i}`}
                  className={`${
                    index === i &&
                    "text-yellow-400 after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(i)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start mb-[4.5rem]">
            {aboutData[index].info.map((item, i) => {
              return (
                <div
                  key={`right-package${i}`}
                  className="flex-1 flex flex-col md:flex-row max-w-md gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, i) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
