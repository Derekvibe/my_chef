import "./HeroPage.css";
import NavBar from "./NavBar";
import MenuSection from "./MenuSection";
import MenuTwo from "./MenuTwo";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HeroPage = () => {
  return (
    <>
      <div className="HeroPage">
        <div className="NavLink">
          <NavBar />
        </div>

        <div className="HeroMain justify-center text-white items-center w-auto mt-44">
          <h1 className="text-6xl p-5 sm:text-2xl md:text-3xl lg:text-6xl">
            Delightful culinary experiences for every occasion
          </h1>

          <div className="Clicker mt-7 flex gap-4 justify-center items-center sm:flex-row md:flex-row lg:flex-row">
            <button className="text-white border-2 border-white p-2 rounded-lg hover:bg-orange-600 hover:border-orange-600">
              See our Menu
            </button>
            <button className=" bg-orange-600 text-white border-2 border-orange-600 p-2 rounded-lg hover:bg-white hover:text-black hover:border-white">
              Book us now
            </button>
          </div>
          <div className="pt-32 pb-16">
            <FontAwesomeIcon icon={faChevronDown} className="text-3xl" />
          </div>
        </div>
      </div>

      <div>
        <MenuSection />
      </div>

      <div>
        <MenuTwo />
      </div>
    </>
  );
};

export default HeroPage;
