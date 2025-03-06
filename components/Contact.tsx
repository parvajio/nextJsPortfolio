import React from "react";
import { Profile } from "./Profile";
import Mail from "./Mail";
import Conect from "./Conect";

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center mx-10">
      <h1 className="font-bold text-white text-4xl md:text-5xl text-center w-full lg:max-w-[45vw]">
        Ready to take <span className="text-[#CBACF9]">your</span> digital
        presence to the next level?
      </h1>
      <p className="text-white-200 md:mt-10 my-5 text-center">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>

      <div className="flex w-full flex-col md:flex-row max-w-7xl gap-10 mx-auto justify-center items-center mt-10">
        
        <Mail></Mail>
        <Profile></Profile>
        <Conect></Conect>
      </div>
    </div>
  );
};

export default Contact;
