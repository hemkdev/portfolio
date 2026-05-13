import { FORMATION } from "../data/portfolio";

function Education({ value }) {
  return (
    <section id="education" className="mx-auto w-full max-w-3xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold">Education</h2>
      <div className="flex flex-col gap-4">
        {FORMATION.map((edu, index) => (
          <div
            key={index}
            className={`rounded-lg border p-5 transition-colors duration-300 ${
              value
                ? "border-gray-200 bg-gray-50/60"
                : "border-white/[0.08] bg-white/[0.03]"
            }`}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-sm font-medium">{edu.degree}</h3>
                <p
                  className={`mt-0.5 text-sm ${
                    value ? "opacity-60" : "opacity-50"
                  }`}
                >
                  {edu.institution}
                </p>
              </div>
              <span
                className={`shrink-0 text-xs sm:mt-0.5 ${
                  value ? "opacity-50" : "opacity-40"
                }`}
              >
                {edu.period}
              </span>
            </div>

            {edu.description && (
              <p
                className={`mt-3 text-xs leading-relaxed ${
                  value ? "opacity-70" : "opacity-60"
                }`}
              >
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
