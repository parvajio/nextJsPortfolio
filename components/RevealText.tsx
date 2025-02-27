"use client";
import React from "react";
import {
  TextRevealCard,
} from "./ui/text-reveal-card";

const RevealText = () => {
  return (
    <div className="flex items-center justify-center rounded-2xl w-full">
      <TextRevealCard
        text="DEVELOPER"
        revealText="PROBLEM SOLVER"
      >
        
      </TextRevealCard>
    </div>
  )
}

export default RevealText