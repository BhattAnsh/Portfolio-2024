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
            role={project.role}
            theme={project.theme}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
