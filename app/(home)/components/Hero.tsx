import Link from 'next/link';
import React from 'react';
import { Graphic } from './Graphic';
import Title from './Title';
import { MovingBorderBtn } from '@/components/ui/moving-border';
import Typewriter from '@/components/ui/typewriter';

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col lg:flex-row items-center justify-between p-9 gap-7 animate-move-up ">
      {/* Left Section */}
      <div className="space-y-8 text-left lg:w-3/5">
        <Typewriter className="text-5xl lg:text-6xl font-bold block underline underline-offset-8 decoration-purple-200 mb-12"
          text = "Hi, I’m Vanessa Lai."
        />

        <div className="space-y-2 text-xl lg:text-xl text-black font-medium">
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
            <span className="relative z-10">𖥔 Avid matcha drinker and coffee lover, when I'm not coding, you can usually find me exploring cafes!.</span>
            <span className="absolute left-0 top-0 bottom-0 bg-blue-200/60 w-0 group-hover:w-full transition-all duration-500 ease-out -z-0"></span>
          </span>
        </div>
        

        <div className="flex gap-5 items-center">
          <div className="relative w-[275px] h-[90px] transform rotate-[-9deg] shadow-lg">
            <div className="absolute inset-0 bg-[#cafcb8bb] rounded-md p-4">
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

          <div className="relative w-[250px] h-[130px] transform rotate-[2deg] shadow-lg mt-8">
            <div className="absolute inset-0 bg-[#ecb8fcbb] rounded-md p-4">
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
      <div className="relative flex justify-center items-center w-full lg:w-2/5">
        <div className="relative space-y-3 flex w-full lg:w-auto">
          <Graphic />
        </div>
        

      </div>
      <div className="absolute -z-10 inset-0 h-full w-full 
        bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
        bg-[size:25px_25px] 
        [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
    </div>
  );
}





