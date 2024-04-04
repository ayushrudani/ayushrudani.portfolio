import Image from "next/image";
import React, { use } from "react";

export const projectsData = [
  {
    title: "Ruds Blog",
    animationTime: 300,
    img: "/images/p1.jpg",
    redirect: "https://ruds-blog.vercel.app/",
  },
  {
    title: "QuizApp",
    animationTime: 600,
    img: "/images/p2.jpg",
    redirect: "QuizApp",
  },
  {
    title: "Beat Store Website",
    animationTime: 900,
    img: "/images/p3.jpg",
    redirect: "https://ayushrudani.github.io/beatstore.github.io/",
  },
  {
    title: "Library management system",
    animationTime: 300,
    img: "/images/p4.jpg",
    redirect: "https://ayushrudani.github.io/library.html",
  },
  {
    title: "Quiz WeSite",
    animationTime: 600,
    img: "/images/p5.jpg",
    redirect: "https://imprisonable-lifebo.000webhostapp.com/std6.php",
  },
  {
    title: "Small Projects",
    animationTime: 900,
    img: "/images/p6.jpg",
    redirect: "https://ayushrudani.github.io/mywork/index.html",
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
          <a
            onClick={() => {
              if (project.redirect) {
                window.open(project.redirect);
              }
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
