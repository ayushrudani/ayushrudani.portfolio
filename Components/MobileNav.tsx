import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
interface MobileNavProps {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: MobileNavProps) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100wh] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">Home</div>
        <div className="nav-link-mobile">About</div>
        <div className="nav-link-mobile">Services</div>
        <div className="nav-link-mobile">Portfolio</div>
        <div className="nav-link-mobile">Blog</div>
        <div className="nav-link-mobile">Contact</div>
      </div>
      <div
        onClick={closeNav}
        className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] cursor-pointer text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
