
import Projects from "../sections/Projects";
function Work() {
  return (
    <>
      <div className="w-full flex flex-col gap-10">
      <h1 className="block md:hidden text-5xl text-neutral-500 font-bold w-[500px]">Code, Coffee and Creativity</h1>
        <Projects></Projects>
      </div>
    </>
  );
}

export default Work;
