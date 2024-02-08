import React from "react";

export const profileData = [
  {
    title: "LinkedIn",
    desc: "Here is my LinkedIn profile. You can see my work experience, education, and other professional details.",
    link: "https://www.linkedin.com/in/ayushrudani/",
  },
  {
    title: "Instagram",
    desc: "Here is my Instagram profile. Where I share some useful content related to programming and tech. You can follow me there.",
    link: "https://www.instagram.com/logic.leaf_/",
  },
  {
    title: "Google Cloud",
    desc: "Here is my Google Cloud profile. You can see my certifications and other details related to Google Cloud Platform.",
    link: "https://www.cloudskillsboost.google/public_profiles/92b8e67e-3c29-4472-ba58-35a59e7510c6",
  },
  {
    title: "Microsoft Learn",
    desc: "Here is my Microsoft Learn profile. You can see my certifications and other details related to Microsoft Learn.",
    link: "https://learn.microsoft.com/en-in/users/ayushrudani-2042/",
  },
  {
    title: "GitHub",
    desc: "Here is my GitHub profile. You can see my open-source projects and other contributions.",
    link: "https://github.com/ayushrudani/",
  },
  {
    title: "LeetCode",
    desc: "Here is my LeetCode profile. You can see my problem-solving skills and other details related to LeetCode.",
    link: "https://leetcode.com/ayushrudani/",
  },
];

const Profiles = () => {
  return (
    <div
      className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]"
      id="profiles"
    >
      <h1 className="heading">
        My<span className="text-yellow-400"> Profile</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-3 gap-[2rem] items-center">
        {profileData.map((profile, index) => (
          <ProfileComponent
            key={`right-package${index}`}
            title={profile.title}
            desc={profile.desc}
            link={profile.link}
          />
        ))}
      </div>
    </div>
  );
};

const ProfileComponent = ({ title, desc, link }: any) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <h1 className=" font-semibold text-[20px] sm:text-[25px] md:text-[34px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[14px] opacity-80 mb-[2rem] mt-[1rem] min-h-[130px]">
        {desc}
      </p>
      <a
        href={link}
        target="_blank"
        className="px-[1.5rem] mt-[2rem]  mb-[1rem] text-[#55e6a5] py-[0.6rem] font-bold text-[14px] border-[2px] border-[#55e6a5] cursor-pointer"
      >
        View Profile
      </a>
    </div>
  );
};

export default Profiles;
