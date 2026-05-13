import { SKILLS } from "../data/portfolio";

function Skills({ value }) {
  return (
    <section id="skills" className="mx-auto w-full max-w-3xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill, index) => (
          <span
            key={index}
            className={`rounded-md border px-3 py-1.5 text-sm transition-colors duration-300 ${
              value
                ? "border-gray-200 bg-gray-50 text-gray-700"
                : "border-white/[0.1] bg-white/[0.04] text-[#EDEDEA]"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
