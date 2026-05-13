import { PROJECTS } from "../data/portfolio";

function Projects({ value }) {
  return (
    <section id="projects" className="mx-auto w-full max-w-3xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold">Projects</h2>

      <div className="flex flex-col gap-4">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className={`group rounded-lg border p-5 transition-colors duration-300 ${
              value
                ? "border-gray-200 bg-gray-50/60 hover:border-gray-300"
                : "border-white/8 bg-white/3 hover:border-white/15"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-sm font-medium leading-snug">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity duration-200"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`shrink-0 text-base leading-none transition-opacity duration-200 opacity-30 group-hover:opacity-60`}
                >
                  ↗
                </a>
              )}
            </div>

            <p
              className={`mt-2 text-xs leading-relaxed ${
                value ? "opacity-65" : "opacity-55"
              }`}
            >
              {project.description}
            </p>

            {project.tags && project.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`rounded px-2 py-0.5 text-xs transition-colors duration-300 ${
                      value
                        ? "bg-gray-200 text-gray-600"
                        : "bg-white/10 text-gray-300"
                    }`}
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
