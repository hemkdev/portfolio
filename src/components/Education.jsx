import { Group, Row } from "./Group";

function Education({ t }) {
  return (
    <Group id="education" label={t.sections.education}>
      {t.education.map((item) => (
        <Row key={item.degree}>
          <div className="min-w-0 flex-1">
            <h3 className="text-[17px] font-semibold">{item.degree}</h3>
            <p className="mt-0.5 font-mono text-[13px] text-suave tabular-nums">
              {item.institution} · {item.period}
            </p>
          </div>
        </Row>
      ))}
    </Group>
  );
}

export default Education;
