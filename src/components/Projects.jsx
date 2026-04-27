import { PROJECTS } from "../data/portfolio";

function Projects( { value } ) {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pb-16">
      <h2 className="mb-4 text-2xl font-semibold">Projects</h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-stretch-110%">
              {project.url != "" ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-50 transition-opacity duration-300"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>

            <p className="mt-2 text-xs opacity-90">{project.description}</p>

            {project.tags && project.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`text-xs px-1 py-1 rounded ${value ? "bg-gray-200 text-gray-700" : "bg-gray-700 text-gray-200"} transition-colors duration-300`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
