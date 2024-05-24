"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">

        {/* col-span 8 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-left justify-self-start"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-poppins 
          mb-4 text-white font-semibold">
            <p className="text-transparent bg-clip-text 
            bg-gradient-to-r from-mycolor-200 to-mycolor-100">
              Hello I am
            </p>
            <div className="h-2"></div>

            <TypeAnimation
              sequence={[
                "Front-End Developer",
                1000,
                "Html",
                1000,
                "Css",
                1000,
                "Boostrap",
                1000,
                "Tailwind Css",
                1000,
                "Javascript",
                1000,
                "Typescript",
                1000,
                "React JS",
                1000,
                "Next JS",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-mycolor-100 text-base mb-6 lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            assumenda. Aliquid assumenda iste fuga minima, ipsam eligendi
            architecto optio sed! Itaque nihil porro repellendus dolores.
          </p>

          <div>

              <Link href={'/#contact'} className="px-6 inline-block py-3 
              w-full md:w-fit rounded-full bg-gradient-to-br 
              from-mycolor-200 to-mycolor-100 text-white text-center 
              transition-all duration-500 hover:from-mycolor-100 hover:to-mycolor-200">
                Hire
              </Link>

              <Link href={'/'} className="px-2 inline-block py-2 w-full md:w-fit 
              rounded-full bg-gradient-to-br 
              from-mycolor-200 to-mycolor-100 text-white text-center 
              transition-all duration-500 hover:from-mycolor-100 hover:to-mycolor-200 
              mt-3 md:ml-3">
                <span className="block bg-mycolor-300 rounded-full py-1 px-5 
                text-white font-semibold">
                  Download CV
                </span>
              </Link>

          </div>
        </motion.div>

        {/* col-span 4 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 md:mt-0"
        >

            <div className="relative rounded-full bg-gradient-to-bl from-mycolor-100 to-mycolor-300 
            w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">

              <Image alt="person-image" src={'/1.png'} width={370} height={370} 
              className="absolute w-[220px] h-[220px]
              lg:w-[370px] lg:h-[370px] rounded-full p-2
              transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>

            </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;