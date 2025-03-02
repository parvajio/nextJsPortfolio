"use client";
import React, { useEffect, useRef,  memo } from "react";
import { motion, useAnimation } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

type TextRevealCardProps = {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
};

export const TextRevealCard = ({ text,
  revealText,
  children,
  className,}: TextRevealCardProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <div ref={textRef} className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-4xl font-bold dark:text-white text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {text}
        </motion.span>
      </div>
    </motion.div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-white text-lg mb-2", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
