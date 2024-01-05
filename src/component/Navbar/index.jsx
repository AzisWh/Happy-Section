import React, { useState, useEffect } from "react";
import Bars3icon from "../icon/Bars3icon";
import Xicon from "../icon/Xicon";

const Navbar = () => {
  // button state
  const [nav, setNav] = useState(false);
  const [navCol, setNavCol] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 0) {
      setNavCol(true);
    } else {
      setNavCol(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => setNav(!nav);

  return (
    <div className={`w-screen h-[80px] z-10 fixed border-b-black border-b-2 ${navCol ? "bg-black bg-opacity-80 backdrop-blur-lg text-white transition duration-300" : "bg-transparent"}`}>
      <div className="px-5 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">HAPPY WEDDING</h1>
          <ul className="hidden md:flex">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              {" "}
              <a href="#info">Info</a>
            </li>
            <li>
              <a href="#story">Story</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="px-8 py-3">RSVP</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars3icon className="w-5" /> : <Xicon className="w-5" />}
        </div>
      </div>

      {/* dropdown menu*/}
      <ul className={!nav ? "hidden" : "absolute w-full px-8 bg-black bg-opacity-80 backdrop-blur-lg text-white transition duration-300 "}>
        <li className="border-b-2 border-zinc-300 w-full text-center">
          <a href="#hero">Home</a>
        </li>
        <li className="border-b-2 border-zinc-300 w-full text-center">
          <a href="#info">Info</a>
        </li>
        <li className="border-b-2 border-zinc-300 w-full text-center">
          <a href="#story">Story</a>
        </li>
        <li className="border-b-2 border-zinc-300 w-full text-center">
          <a href="#gallery">Gallery</a>
        </li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3 mb-4">RSVP</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
