import { PERSON } from "../data/portfolio";

function Hero({ t }) {
  const links = [
    { label: "GitHub", url: PERSON.github },
    { label: "LinkedIn", url: PERSON.linkedin },
    { label: t.ui.email, url: `mailto:${PERSON.email}` },
  ];
  const button = "rounded-full px-4 py-2.25 text-[15px] font-semibold";

  return (
    <section id="home" className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div className="flex-1">
        <h1 className="mt-6 text-[34px] leading-[1.1] font-bold tracking-[-0.022em]">{PERSON.name}</h1>
        <p className="mt-1 text-suave">{t.role}</p>
        <p className="mt-4 max-w-[56ch]">{t.about}</p>

        {/* TODO: botão "Baixar currículo" (preenchido, bg-texto text-fundo) volta quando os PDFs sem telefone existirem */}
        <nav aria-label="Links" className="mt-5 flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className={`${button} bg-botao`}
              {...(link.url.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <img
        src={PERSON.avatar}
        alt={PERSON.name}
        className="size-36 shrink-0 rounded-xl object-cover ring-1 ring-separador"
      />
    </section>
  );
}

export default Hero;
