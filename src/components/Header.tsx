
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldSetScrolled = scrollPosition > 0;
      setIsScrolled(shouldSetScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-white fixed text-gray-900 " : " bg-black relative"
      } top-0 left-0 right-0 z-[1] pt-[1.563rem] pb-[1.563rem] transition-all ease-in-out delay-500`}
    >
      <div className="container px-6 pt-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <div className="text-lg  flex justify-center items-center ">
            <Link href={"/"}>
              <h3 className={`${isScrolled ? "text-black" : "text-white"}`}>
                Chachu
              </h3>
            </Link>
          </div>

          <div
            onClick={handleMenu}
            className="text-black cursor-pointer absolute top-[0px] right-[0px] leading-none px-4 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none h-full flex justify-center items-center"
          >
            {!menu ? (
              <Image
                src={"/menu-bar.svg"}
                alt="menu bar"
                width={24}
                height={24}
                color="white"
              />
            ) : (
              <Image
                src={"/close-icon.svg"}
                alt="menu bar"
                width={22}
                height={22}
              />
            )}
          </div>
        </div>

        {/*Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`${
            menu ? "translate-x-0 opacity-100 " : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-900 dark:bg-gray-400 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
        >
          <div className="flex flex-col lg:flex-row lg:mx-6 items-center">
            <Link
              className={`my-2 ${
                isScrolled ? "text-balck" : "text-white"
              }  transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0`}
              href="/"
              onClick={handleMenu}
            >
              Home
            </Link>
            <Link
              className={`my-2 ${
                isScrolled ? "text-balck" : "text-white"
              }  transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0`}
              href="/About"
              onClick={handleMenu}
            >
              About
            </Link>
            <Link
              className={`my-2 ${
                isScrolled ? "text-balck" : "text-white"
              }  transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0`}
              href="/services"
              onClick={handleMenu}
            >
              Services
            </Link>
            <Link
              className={`my-2 ${
                isScrolled ? "text-balck" : "text-white"
              }  transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0`}
              href="/works"
              onClick={handleMenu}
            >
              Works
            </Link>
            <Link
              className={`my-2 ${
                isScrolled ? "text-balck" : "text-white"
              }  transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0`}
              href="/contact"
              onClick={handleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
