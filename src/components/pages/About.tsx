import { WordPullUp } from "../animations/WordPullUp";
export function About() {
  return (
    <div className="w-full justify-center items-center flex flex-col gap-10">
      {/* <div className="heading text-center md:text-start block text-8xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
        ABOUT ME
      </div> */}
      <WordPullUp text="ABOUT ME"/>
      <div className="flex flex-row text-center md:text-start justify-center items-center text-2xl text-white w-[90vw] lg:w-[60vw]">
        Hi, I’m Ansh Bhatt, a full-stack developer and system design architect
        with a passion for creating impactful digital solutions. With a strong
        foundation in computer science from AKTU University, I specialize in
        building modern, scalable applications using React, Next.js, TypeScript,
        and the MERN stack. Over the years, I’ve led and contributed to diverse
        projects, from developing AI-driven financial advisors to creating
        seamless user interfaces. Beyond coding, I enjoy capturing cinematic
        moments through photography and videography. I’m always excited to explore new
        technologies and take on challenging projects. Let’s connect and bring
        ideas to life!
      </div>
    </div>
  );
}
