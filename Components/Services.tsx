import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

export const servicesData = [
  {
    id: 1,
    color: "red",
    icon: (
      <CodeBracketSquareIcon className="h-[6rem] w-[6rem] mx-auto tex-[#d3fae8]" />
    ),
    animationTime: 200,
    title: "Frontend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis, eum sunt numquam dicta laudantium officiis eveniet nemo. Placeat voluptatem totam officiis asperiores vero officia, saepe possimus sint? Adipisci, perspiciatis.",
  },
  {
    id: 2,
    color: "orange",
    icon: (
      <CommandLineIcon className="h-[6rem] w-[6rem] mx-auto tex-[#d3fae8]" />
    ),
    animationTime: 400,
    title: "Backend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis, eum sunt numquam dicta laudantium officiis eveniet nemo. Placeat voluptatem totam officiis asperiores vero officia, saepe possimus sint? Adipisci, perspiciatis.",
  },
  {
    id: 3,
    color: "blue",
    icon: (
      <RocketLaunchIcon className="h-[6rem] w-[6rem] mx-auto tex-[#d3fae8]" />
    ),
    animationTime: 200,
    title: "Fullstack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis, eum sunt numquam dicta laudantium officiis eveniet nemo. Placeat voluptatem totam officiis asperiores vero officia, saepe possimus sint? Adipisci, perspiciatis.",
  },
];

const Services = () => {
  return (
    <div
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
      id="services"
    >
      <p
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1500"
        className="heading"
      >
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
        {servicesData.map((service) => (
          <div
            data-aos="zoom-in"
            key={service.id}
            data-aos-delay={service.animationTime}
            data-aos-duration="1500"
          >
            <div
              className={`${service.color} hover:scale-110 transform transition-all duration-300 capitalize font-semibold text-center p-[2rem] rounded-lg shadow-sm`}
            >
              {service.icon}
              <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                {service.title}
              </h1>
              <p className="text-[15px] text-[#d3d2d2] font-normal">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
