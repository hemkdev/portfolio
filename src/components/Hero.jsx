import { PERSON } from "../data/portfolio";

function Hero() {
  return (
    <section className="mx-auto flex h-full w-full max-w-3xl items-center justify-between gap-8 px-6 py-12 flex-col md:flex-row">
      <div>
        <h1 className="text-left text-2xl font-semibold leading-tight md:text-3xl">
          {PERSON.name}
        </h1>
        <p className="mt-2 text-left text-sm opacity-90">
          {PERSON.title}
        </p>

        <div className="mt-4 flex items-center">
          {PERSON.social.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-left text-xs opacity-80 hover:opacity-100"
            >
              {social.name}
            </a>
          ))}
        </div>

      </div>

      <div className="shrink-0">
        <img
          src={PERSON.avatar}
          alt={PERSON.name}
          className="h-40 w-40 shrink-0 rounded-lg object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
