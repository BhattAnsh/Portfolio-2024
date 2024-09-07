
import Projects from "../sections/Projects";
import { WordPullUp } from "../animations/WordPullUp";
function Work() {
  return (
    <>
      <div className="w-full justify-center items-center flex flex-col gap-10">
      <WordPullUp text="PROJECTS"/>
        <Projects></Projects>
      </div>
    </>
  );
}

export default Work;
