import { Group, Row } from "./Group";

function Experience({ t }) {
  return (
    <Group id="experience" label={t.sections.experience}>
      {t.experience.map((job) => (
        <Row key={job.company}>
          <div className="min-w-0 flex-1">
            <h3 className="text-[17px] font-semibold">{job.role}</h3>
            <p className="mt-0.5 font-mono text-[13px] text-suave tabular-nums">
              {job.company} · {job.period}
            </p>
            {job.note && <p className="mt-1 text-[15px] italic text-suave">{job.note}</p>}
            {job.bullets && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-[1.4] marker:text-neutro">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </Row>
      ))}
    </Group>
  );
}

export default Experience;
