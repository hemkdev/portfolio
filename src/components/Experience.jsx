import { WORK_EXPERIENCE } from "../data/portfolio";

function Experience({ value }) {
  return (
    <section id="experience" className="mx-auto w-full max-w-3xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
      <div className="flex flex-col gap-4">
        {WORK_EXPERIENCE.map((job, index) => (
          <div
            key={index}
            className={`rounded-lg border p-5 transition-colors duration-300 ${
              value
                ? "border-gray-200 bg-gray-50/60"
                : "border-white/8 bg-white/3"
            }`}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-sm font-medium">{job.role}</h3>
                <p
                  className={`mt-0.5 text-sm ${
                    value ? "opacity-60" : "opacity-50"
                  }`}
                >
                  {job.company}
                </p>
              </div>
              <span
                className={`shrink-0 text-xs sm:mt-0.5 ${
                  value ? "opacity-50" : "opacity-40"
                }`}
              >
                {job.Period}
              </span>
            </div>

            {job.description && (
              <p
                className={`mt-3 text-xs leading-relaxed ${
                  value ? "opacity-70" : "opacity-60"
                }`}
              >
                {job.description}
              </p>
            )}

            {job.tags && job.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.tags.map((tag, tagIndex) => (
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

export default Experience;
