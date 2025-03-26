import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function Profile() {
  return (
    <div className="flex-1 border border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[20rem] w-full">
      <Icon className="absolute h-6 w-6 -top-1.5 -left-1.5 text-white z-10" />
      <Icon className="absolute h-6 w-6 -bottom-1.5 -left-1.5 text-white z-10" />
      <Icon className="absolute h-6 w-6 -top-1.5 -right-1.5  text-white z-10" />
      <Icon className="absolute h-6 w-6 -bottom-1.5 -right-1.5 text-white z-10" />

      <EvervaultCard />
    </div>
  );
}
