import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Sebastián García
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus possimus officia corrupti culpa quibusdam, molestiae
            vel. Quisquam, quos. Quisquam, quos.
          </p>
        </div> 
        <div className="col-span-5">
            <Image src="/images/hero-image.png"></Image>
        </div>
      </div>
    </section>
  );
};
