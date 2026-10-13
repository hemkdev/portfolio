import { Group, Row } from "./Group";

// Usado para Projetos e para Open source
function Projects({ id, label, items }) {
  return (
    <Group id={id} label={label}>
      {items.map((item) => (
        <Row key={item.title}>
          <div className="min-w-0 flex-1">
            <h3 className="text-[17px] font-semibold">{item.title}</h3>
            <p className="mt-0.5 text-[15px] leading-[1.4] text-suave">{item.description}</p>
            {item.stack && (
              <p className="mt-1.5 font-mono text-[13px] text-suave">{item.stack.join(" · ")}</p>
            )}
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[13px]">
              {item.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-separador underline-offset-3 hover:decoration-current"
                >
                  {link.label} ↗
                </a>
              ))}
            </p>
          </div>
        </Row>
      ))}
    </Group>
  );
}

export default Projects;
