import ProjectFrame from "../ui/ProjectFrame";
import projects from "../../Projects.json";

function Projects() {
  return (
    <>
      <div>
        {projects.map((project, index) => (
          <ProjectFrame
            key={index}
            className="k"
            title={project.title}
            image={project.image}
            role={project.role} // Changed this to use project.role instead of project.title
            theme={project.theme}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
