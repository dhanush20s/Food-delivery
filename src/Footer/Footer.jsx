import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-black text-white  ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-4 ">
        {/* <h1
          className="lg:text-4xl text-3xl md:mb-0  lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-orange-600">Free</span> until you're ready to
          launch
        </h1>
        <div>
          <input
            type="number"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-gradient-to-br from-orange-400 to-orange-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request Code
          </button>
        </div> */}
      </div>
      <div className="px-12">
      <ItemsContainer />
     
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-6 "
      >
        <span><img className="w-28 pl-4 ml-3" src="https://ride.swiggy.com/images/logo_light.png"/></span>
        <span>© 2022 Appy. All rights reserved.</span>
        <SocialIcons Icons={Icons} />
      </div>
      </div>
    </footer>
  );
};

export default Footer;