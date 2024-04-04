import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
const QuizApp = () => {
  return (
    // Screenshots of the QuizApp and description about the app the screenshots are left side and right side of the description and the next screenshot is right side and left side of the description and so on. and there is a title of the app on the top of the screenshots and description. and download link of the app is at the bottom of the description. use tailwind css for styling.
    <div className="bg-[#121121] pt-[4rem] md:pt-[5rem] pb-[5rem]" id="quizapp">
      <p
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1500"
        className="heading"
      >
        Quiz <span className="text-yellow-400">App</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center  mt-[4rem]">
        <div>
          <h2
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1500"
            className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white"
          >
            App <span className="text-yellow-400">Introduction</span>
          </h2>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1500"
            className="mb-[3rem] flex items-center md:space-x-10"
          >
            <p className="text-[19px] text-slate-300 w-[80%]">
              This is a Quiz App. This app is created using Flutter ans SQL
              Lite. This app contains a questions related to different topics
              like java, python, c++, c#, React and many more. This app is very
              useful for the students who are preparing for the exams like GATE,
              CAT, GRE, GMAT, SAT, TOEFL, IELTS, and many more. and also app has
              a dark mode and light mode.
            </p>
          </div>
          <button
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1500"
            className="px-[2rem] hover:bg-transparent  hover:text-yellow-400 hover:border-yellow-400 hover:border-2 transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-yellow-400 text-black flex items-center space-x-2"
          >
            <p>Download Quiz App</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] " />
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1500"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src={"/images/QuizApp/QuizApp.jpg"}
            alt="user"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
