import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          ¡Pongámonos en contacto!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum sint
          tenetur deserunt illum sequi magni fugit, eaque excepturi voluptate
          distinctio sit culpa rerum, amet praesentium, non dolor libero? Vel
          doloremque voluptatibus tempore esse amet? Nisi quibusdam quidem animi
          sapiente sunt.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <FaGithub />
          </Link>
          <Link href="linkedin.com">
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col ">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Tu Email
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              placeholder="Asunto"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Asunto
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              placeholder="Asunto"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              placeholder="Hablemos sobre..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            holi
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
