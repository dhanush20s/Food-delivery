import React from "react";
import About from "../img/about_img.jpg";
import comma from "../img/inverted-commas.png";
import Journey from "../img/Swiggy-Journey.jpg"
const AboutUs = () => {
  return (
    <div>
      <section className="grid grid-cols-2 md:grid-cols-2 w-full  h-full">
        <div className=" flex-1 flex flex-col items-start justify-center">
          <div className="flex items-center justify-center bg-orange-400 w-full h-full">
            <img src={About} className="w-full " alt="aboutUS" />
          </div>
        </div>
        <div className="py-2 flex-1 flex items-center relative">
          <div className="h-full px-6 py-4 absolute top-0 left-0 flex flex-wrap bg-gradient-to-br from-orange-400 to-orange-500">
            <img className="left-0 w-30 h-32 " src={comma}></img>
            <div className=" text-white text-3xl leading-12 font-normal ">
              After a slow start, Swiggy snowballed into an unstoppable force
              that is now changing the way India eats.
            </div>
          </div>
        </div>
      </section>
      <div className="py-12 flex items-center justify-center  text-3xl font-light gap-2 tracking-widest ">
        The Swiggy <span className="font-bold text-4xl font-mono   ">Journey</span> 
      </div>
      <div className="">
       <img src={Journey} alt="journey"/>
      </div>
    </div>
  );
};

export default AboutUs;
