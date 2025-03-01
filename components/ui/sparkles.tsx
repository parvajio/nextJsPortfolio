"use client";
import React, { useId, useRef } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null); // Removed 'any' type
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const controls = useAnimation();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      // Your logic here
    }
  };

  const generatedId = useId();
  return (
    <div ref={cardRef} className={cn("relative", className)} id={id || generatedId}>
      {init && (
        <Particles
          id={id || generatedId}
          init={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "#000",
              },
            },
            particles: {
              number: {
                value: particleDensity || 50,
              },
              size: {
                value: particleSize || 3,
                random: {
                  enable: true,
                  minimumValue: minSize || 1,
                },
              },
              move: {
                speed: speed || 1,
              },
              color: {
                value: particleColor || "#ffffff",
              },
            },
          }}
        />
      )}
    </div>
  );
};
