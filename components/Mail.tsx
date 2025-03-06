import React from "react";
import { Icon } from "./ui/evervault-card";

const Mail = () => {
  return (
    <>
      <div className="border border-white/[0.2] flex flex-col items-start p-4 relative w-full h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
        
      </div>
    </>
  );
};

export default Mail;
