"use client";

import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from '@/components/ui/typewriter';

const images = [
  '/oneforall.jpg',
  '/vanessa.jpg',
  '/winning.JPG',
];

function HeroPhotoStack() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center overflow-visible py-6"
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-[220px] md:w-[260px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
          style={{ rotate: rotate1, x: x1, y, zIndex: 1 }}
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0 0 0 0)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[0] || '/placeholder.svg'}
            alt="Portfolio showcase 1"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="relative w-[220px] md:w-[260px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
          style={{ rotate: rotate2, y, zIndex: 2 }}
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0 0 0 0)' }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[1] || '/placeholder.svg'}
            alt="Portfolio showcase 2"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute w-[220px] md:w-[260px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
          style={{ rotate: rotate3, x: x3, y, zIndex: 1 }}
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0 0 0 0)' }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[2] || '/placeholder.svg'}
            alt="Portfolio showcase 3"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-9 py-12 sm:py-16 gap-7 animate-move-up ">
      {/* Left Section */}
      <div className="space-y-8 text-left lg:w-3/5">
        <Typewriter className="text-5xl lg:text-6xl font-bold block underline underline-offset-8 decoration-purple-200 mb-12"
          text = "Hi, I’m Vanessa Lai."
        />

        <div className="space-y-2 text-lg lg:text-xl text-black font-medium">
          <span className="relative inline-block group cursor-default">
            <span className="relative z-10">𖥔 Software Engineering Student @ McMaster University.</span>
            <span className="absolute left-0 top-0 bottom-0 bg-green-200/60 w-0 group-hover:w-full transition-all duration-500 ease-out -z-0"></span>
          </span>
          <br />
          <span className="relative inline-block group cursor-default">
            <span className="relative z-10">𖥔 Experienced in Dev Ops, Full Stack Development, and UI/UX Design.</span>
            <span className="absolute left-0 top-0 bottom-0 bg-pink-200/60 w-0 group-hover:w-full transition-all duration-500 ease-out -z-0"></span>
          </span>
          <br />
          <span className="relative inline-block group cursor-default">
            <span className="relative z-10">𖥔 Avid matcha drinker and coffee lover, when I&apos;m not coding, you can usually find me exploring cafes!.</span>
            <span className="absolute left-0 top-0 bottom-0 bg-blue-200/60 w-0 group-hover:w-full transition-all duration-500 ease-out -z-0"></span>
          </span>
        </div>
        

        <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center w-full max-w-xl">
          <div className="relative w-full sm:w-[275px] min-h-[90px] transform rotate-[-9deg] shadow-lg">
            <div className="absolute inset-0 bg-[#cafcb8bb] rounded-md p-4 overflow-hidden">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-medium">Navigating the world of code and design. 『••✎••』 <br/><br/>
                    {/* <Link
                      href={"https://drive.google.com/file/d/1u5rZD-lbzy0M4azHsZtnum2_2_ZMNMXH/view?usp=sharing"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className = "font-thin underline decoration-purple-200 text-md"
                    >Click here for my Resume</Link> */}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full sm:w-[250px] min-h-[130px] transform rotate-[2deg] shadow-lg mt-4 sm:mt-8">
            <div className="absolute inset-0 bg-[#ecb8fcbb] rounded-md p-4 overflow-hidden">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-medium"> Previous Intern at: Royal Bank of Canada (RBC)   *:ꔫ:* </h3>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>


      {/* Right Section */}
      <div className="relative flex justify-center items-center w-full lg:w-2/5 mt-8 lg:mt-0">
        <HeroPhotoStack />
      </div>
      <div className="absolute -z-10 inset-0 h-full w-full 
        bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
        bg-[size:25px_25px] 
        [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
    </div>
  );
}





