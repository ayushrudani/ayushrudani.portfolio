import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Student",
        1500,
        ".NET Developer",
        1500,
        "Flutter Developer",
        1500,
        "Full Stack Developer",
        1500,
      ]}
      speed={50}
      className="text-[2re,] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
