import { Group, Row } from "./Group";

function Skills({ t }) {
  return (
    <Group id="skills" label={t.sections.skills}>
      {t.skills.map((group) => (
        <Row key={group.label}>
          <div className="min-w-0 flex-1 sm:flex sm:gap-4">
            <h3 className="shrink-0 text-[15px] font-semibold sm:w-32">{group.label}</h3>
            <p className="text-[15px] leading-[1.4] text-suave">{group.items.join(" · ")}</p>
          </div>
        </Row>
      ))}
    </Group>
  );
}

export default Skills;
