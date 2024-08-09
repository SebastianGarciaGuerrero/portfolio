import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-primary-500 text-white"
    : "text-[#ADB7BE]  BORDER-SLATE-600 hover:text-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-6 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
