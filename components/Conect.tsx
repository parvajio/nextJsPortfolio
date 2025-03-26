"use client"

import { useState } from "react"
import { Icon } from "./ui/evervault-card"
import { CardSpotlight } from "./ui/card-spotlight"
import { Button } from "./ui/moving-border"
import { motion } from "framer-motion"
import { Linkedin, Github, Twitter, ArrowRight, CodeXml } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/parvajio/",
    icon: <Linkedin className="h-5 w-5" />
  },
  {
    name: "GitHub",
    url: "https://github.com/parvajio",
    icon: <Github className="h-5 w-5" />
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/parvajio",
    icon: <CodeXml className="h-5 w-5" />
  },
]

const Connect = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex-1 border border-white/[0.2] flex flex-col items-start p-6 relative h-[20rem] w-full overflow-hidden bg-black/20 backdrop-blur-sm rounded-lg">
      {/* Corner Icons */}
      <Icon className="absolute h-6 w-6 -top-1.5 -left-1.5 text-white z-10" />
      <Icon className="absolute h-6 w-6 -bottom-1.5 -left-1.5 text-white z-10" />
      <Icon className="absolute h-6 w-6 -top-1.5 -right-1.5 text-white z-10" />
      <Icon className="absolute h-6 w-6 -bottom-1.5 -right-1.5 text-white z-10" />

      {/* Background effects */}
      <div className="absolute w-40 h-40 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl -top-20 -right-20"></div>
      <div className="absolute w-40 h-40 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl -bottom-20 -left-20"></div>

      {/* CARD CONTENT */}
      <CardSpotlight className="flex flex-col justify-center w-full h-full">
        <div className="w-full">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <h2 className="text-2xl font-bold relative z-20 text-white">Connect With Me</h2>
            </div>
          </div>

          <div className="space-y-4 z-20 relative flex flex-col justify-center items-center">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Button borderRadius="1.5rem" className={`group w-full border-none p-0 overflow-hidden`}>
                    <div
                      className={`
                      w-full py-3 px-4 rounded-full
                      transition-all duration-300
                      flex items-center justify-between
                    `}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          {social.icon}
                        </div>
                        <span className="font-medium">{social.name}</span>
                      </div>

                      <motion.div
                        animate={{
                          x: hoveredIndex === index ? [0, 5, 0] : 0,
                        }}
                        transition={{
                          duration: 1,
                          repeat: hoveredIndex === index ? Number.POSITIVE_INFINITY : 0,
                          repeatType: "loop",
                        }}
                      >
                        <ArrowRight className="w-5 h-5 opacity-70" />
                      </motion.div>
                    </div>
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center mt-6">
          <div className="text-xs text-white/40 flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-white/40"></span>
            <span>Let's build something amazing together</span>
            <span className="h-1 w-1 rounded-full bg-white/40"></span>
          </div>
        </div>
      </CardSpotlight>
    </div>
  )
}

export default Connect

