import type { APIRoute } from "astro";
import { CONTENT, PERSON, type Content, type Lang, type Project } from "../data/portfolio";

const LANG_NAME: Record<Lang, string> = { pt: "Português", en: "English" };

const links = (item: Project) => item.links.map((link) => `[${link.label}](${link.url})`).join(" · ");

const projects = (items: Project[]) =>
  items
    .map((item) => {
      const stack = item.stack ? ` Stack: ${item.stack.join(", ")}.` : "";
      return `- **${item.title}**: ${item.description}${stack} ${links(item)}`;
    })
    .join("\n");

const section = (lang: Lang, t: Content, url: string) => `## ${LANG_NAME[lang]}

${t.role}. ${url}

${t.about}

### ${t.sections.projects}

${projects(t.projects)}

### ${t.sections.openSource}

${projects(t.openSource)}

### ${t.sections.experience}

${t.experience
  .map((job) => {
    const note = job.note ? ` (${job.note})` : "";
    const bullets = job.bullets?.map((bullet) => `\n  - ${bullet}`).join("") ?? "";
    return `- **${job.role}**, ${job.company}, ${job.period}${note}${bullets}`;
  })
  .join("\n")}

### ${t.sections.skills}

${t.skills.map((group) => `- ${group.label}: ${group.items.join(", ")}`).join("\n")}

### ${t.sections.education}

${t.education.map((item) => `- ${item.degree}, ${item.institution}, ${item.period}`).join("\n")}
`;

export const GET: APIRoute = ({ site }) => {
  const urls: Record<Lang, string> = { pt: new URL("/", site).href, en: new URL("/en/", site).href };
  const text = `# ${PERSON.name}

> ${CONTENT.pt.meta.description} / ${CONTENT.en.meta.description}

- Site: ${urls.pt} (PT) · ${urls.en} (EN)
- GitHub: ${PERSON.github}
- LinkedIn: ${PERSON.linkedin}
- E-mail: ${PERSON.email}

${(Object.keys(CONTENT) as Lang[]).map((lang) => section(lang, CONTENT[lang], urls[lang])).join("\n")}`;
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8" } });
};
