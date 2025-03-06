import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function Profile() {
  return (
    <div className="border border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <EvervaultCard/>
    </div>
  );
}
