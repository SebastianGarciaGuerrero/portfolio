"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "Proyecto 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/1.jpeg",
    tag: ["ALL", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/2.png",
    tag: ["ALL", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Proyecto 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/3.jpeg",
    tag: ["ALL", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Proyecto 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/4.jpeg",
    tag: ["ALL", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Proyecto 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/5.jpeg",
    tag: ["ALL", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Proyecto 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/6.jpeg",
    tag: ["ALL", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("ALL");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div>
      <h2 className="text-center mb-4 text-4xl font-bold text-white mt-4">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="ALL"
          isSelected={tag === "ALL"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
