import Image from "next/image";
import React from "react";

export const projectsData = [
  {
    title: "project 1",
    animationTime: 300,
    img: "/images/p1.jpg",
  },
  {
    title: "project 2",
    animationTime: 600,
    img: "/images/p2.jpg",
  },
  {
    title: "project 3",
    animationTime: 900,
    img: "/images/p3.jpg",
  },
  {
    title: "project 4",
    animationTime: 300,
    img: "/images/p4.jpg",
  },
  {
    title: "project 5",
    animationTime: 600,
    img: "/images/p5.jpg",
  },
  {
    title: "project 6",
    animationTime: 900,
    img: "/images/p6.jpg",
  },
];

const Projects = () => {
  return (
    <div
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]"
      id="projects"
    >
      <p data-aos="fade-down" data-aos-duration="1000" className="heading">
        Pro<span className="text-yellow-400">Ject</span>
      </p>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projectsData.map((project, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={project.animationTime}
            key={`right-package${index}`}
            className="project-card"
          >
            <Image
              src={project.img}
              layout="fill"
              alt={project.title}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
