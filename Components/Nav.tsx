import { Bars3Icon } from "@heroicons/react/16/solid";
import React, { useEffect } from "react";

interface NavProps {
  openNav: () => void;
}

const Nav = ({ openNav }: NavProps) => {
  const [show, setShow] = React.useState(true);
  const [scrollPos, setScrollPos] = React.useState(0);
  const handleScroll = () => {
    const currentScrollPos = document.body.getBoundingClientRect().top;
    setShow(currentScrollPos > scrollPos);
    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={` ${show ? "fixed top-0" : "hidden"} ${
        scrollPos == 0 ? "sticky" : ""
      } w-[100%]  z-[10000000] h-[12vh] bg-[#141c27] shadow-md transition-all ease-in duration-700`}
    >
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          AYUSH
          <span className="text-yellow-300">RUDS</span>
        </h1>
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#services" className="nav-link">
          Services
        </a>
        <a href="#skils" className="nav-link">
          Skils
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#profiles" className="nav-link">
          Profiles
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>

        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
