import Projects from "../sections/Projects";
import OtherWork from "../sections/OtherWork";
import { WordPullUp } from "../animations/WordPullUp";

function Work() {
  return (
    <>
      <div className="w-full justify-center items-center flex flex-col gap-10">
        <WordPullUp text="PROJECTS"/>
        <Projects />
        <WordPullUp text="OTHER WORK"/>
        <OtherWork />
      </div>
    </>
  );
}

export default Work;
