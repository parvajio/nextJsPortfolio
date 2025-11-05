"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(65, 140, 200)", // bright blue
    "rgb(60, 135, 195)", // clear blue
    "rgb(55, 130, 190)", // sky blue
    "rgb(52, 128, 185)", // medium blue
    "rgb(50, 135, 180)", // blue
    "rgb(48, 142, 175)", // blue-teal
    "rgb(46, 148, 170)", // teal
    "rgb(44, 155, 165)", // bright teal
    "rgb(42, 160, 158)", // teal-cyan
    "rgb(40, 165, 150)", // cyan-green
    "rgb(38, 168, 142)", // turquoise
    "rgb(36, 170, 135)", // sea green
    "rgb(35, 172, 128)", // aqua green
    "rgb(34, 174, 122)", // mint green
    "rgb(33, 176, 116)", // fresh green
    "rgb(32, 178, 110)", // spring green
    "rgb(32, 180, 105)", // emerald
    "rgb(32, 182, 100)", // bright emerald
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [colors]);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
