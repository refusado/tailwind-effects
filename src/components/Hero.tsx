'use client';

import { Variants, motion } from "framer-motion"

export function Hero() {
  const itemVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.24
      }
    }
  }

  return (
    <motion.section
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.18
          }
        }
      }}
      className="py-24 md:py-40 max-w-2xl text-center container"
      initial="hidden" animate="visible"
    >
      <motion.h1 className="mb-3 text-lg md:text-xl" variants={itemVariants}>
        <span className="bg-clip-text bg-gradient-to-r from-cyan-100 to-emerald-200/95 text-transparent">
          Tailwind Effects
        </span> 💫
      </motion.h1>

      <motion.p className="mb-6 text-4xl md:text-6xl" variants={itemVariants}>
        <span className="bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-300/90 text-transparent">
          Collection of beautiful effects ready to use
        </span>
      </motion.p>

      <motion.p className="mb-12 md:px-7 lg:text-lg" variants={itemVariants}>
        Modern, clean and customizable codes using Tailwind CSS. Select your effect, copy the code into your project and adapt for your UI!
      </motion.p>

      <motion.p className="flex justify-center items-center gap-2" variants={itemVariants}>
        <a href="https://github.com/refusado/tailwind-effects" target="_blank" rel="noopener noreferrer">
          <img alt="Github repository" src="https://img.shields.io/badge/github-%2523121011.svg?style=flat&logo=github&label=repository&color=teal&link=https%3A%2F%2Fgithub.com%2Frefusado%2Ftailwind-effects" />
        </a>

        <img alt="Visitors count" src="https://img.shields.io/endpoint?url=https%3A%2F%2Fhits.dwyl.com%2Frefusado%2Ftailwind-effects.json&style=flat&label=visitors&color=black" />
      </motion.p>
    </motion.section>
  )
}