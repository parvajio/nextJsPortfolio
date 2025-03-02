import { motion } from "motion/react";
import React from 'react';
import { WorldMap } from "./world-map";

const Remote = () => {
  return (
    <div className="py-20 w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-4xl mx-auto py-4">
        As a developer from Bangladesh, I embrace the power of remote work, allowing me to build, innovate, and collaborate from anywhere. Whether coding in the comfort of my studio apartment or exploring new destinations, I stay connected and productive. Perfectly suited for digital nomads and tech enthusiasts like me
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 12, lng: 86 }, // Bangladesh (Dhaka) - adjusted coordinates
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 12, lng: 86 }, // Bangladesh (Dhaka) - adjusted coordinates
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: 12, lng: 86 }, // Bangladesh (Dhaka) - adjusted coordinates
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 12, lng: 86 }, // Bangladesh (Dhaka) - adjusted coordinates
            end: { lat: 51.5074, lng: -0.1278 }, // London
          },
          {
            start: { lat: 12, lng: 86 }, // Bangladesh (Dhaka) - adjusted coordinates
            end: { lat: 28.6139, lng: 77.2090 }, // New Delhi
          },
          {
            start: { lat: 12, lng: 86 }, // Bangladesh (Dhaka) - adjusted coordinates
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 12, lng: 86 }, // Bangladesh (Dhaka) - adjusted coordinates
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
};

export default Remote;
