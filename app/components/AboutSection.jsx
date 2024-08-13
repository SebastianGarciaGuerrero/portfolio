"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Educación",
    id: "educacion",
    content: (
      <ul className="list-disc pl-2">
        <li>IACC</li>
        <li>Desafio Latam</li>
        <li>YouTube</li>
      </ul>
    ),
  },
  {
    title: "Certificados",
    id: "certificados",
    content: (
      <ul className="list-disc pl-2">
        <li>FullStack Developer</li>
        <li>Cisco</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="sobremi">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/image/cycle.jpg" alt="cycle" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            repudiandae, id modi quisquam earum odit atque incidunt fugiat
            aliquam itaque?
          </p>
          <div className=" flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("educacion")}
              active={tab === "educacion"}
            >
              {""}Educación{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificados")}
              active={tab === "certificados"}
            >
              {""}Certificados{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
