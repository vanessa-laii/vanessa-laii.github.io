import Link from 'next/link';
import React from 'react';
import Graphic from './Graphic';
import Title from './Title';
import { MovingBorderBtn } from '@/components/ui/moving-border';
import Typewriter from '@/components/ui/typewriter';

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse lg:flex-row items-center justify-between p-5 gap-20 animate-move-up">
      {/* Left Section */}
      <div className="space-y-8 text-left lg:w-3/5">
        <Typewriter className="text-3xl lg:text-6xl font-bold block underline underline-offset-8 decoration-purple-200"
          text = "Hi, I’m Vanessa Lai."
        />

        <p className="text-xl lg:text-xl text-black font-medium">
          𖥔 Software Engineering Student @ McMaster University. 
          <br />
          𖥔 Experienced in Dev Ops, Full Stack Development, and UI/UX Design. 
          <br />
          𖥔 Passionate about creating seamless digital experiences through code and creativity.
        </p>

        <div className="flex gap-20 items-center">
          <div className="relative w-[275px] h-[100px] transform rotate-[-5deg] shadow-lg">
            <div className="absolute inset-0 bg-[#cafcb8bb] rounded-md p-4">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-medium">Navigating the world of code and design. 『••✎••』</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[250px] h-[130px] transform rotate-[2deg] shadow-lg mt-8">
            <div className="absolute inset-0 bg-[#ecb8fcbb] rounded-md p-4">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-medium"> Currently Interning at: Royal Bank of Canada (RBC)   *:ꔫ:* </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Vertical Divider */}
      <div className="block w-px h-[60%] bg-gray-300 mx-6" />

      {/* Right Section */}
      <div className="relative flex justify-center items-center w-full lg:w-2/5">
        <div className="space-y-3 right-0 relative flex justify-left items-left w-full lg:w-auto">
          <Graphic />
        </div>
        <div className="absolute right-5 top-20">
          <Link
            href={"https://drive.google.com/file/d/1u5rZD-lbzy0M4azHsZtnum2_2_ZMNMXH/view?usp=sharing"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
              <p>⊹ My Resume ⊹</p>
            </MovingBorderBtn>
          </Link>
        </div>
      </div>
      <div className="absolute -z-10 inset-0 h-full w-full 
        bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
        bg-[size:25px_25px] 
        [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
    </div>
  );
}

