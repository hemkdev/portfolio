import { PERSON } from "../data/portfolio";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex w-full max-w-3xl items-center justify-between gap-6 px-6 py-8 text-sm opacity-90 whitespace-nowrap">
      <p>
        &copy; {currentYear} {PERSON.name}. All rights reserved.
      </p>
      <ul className="flex items-center gap-4">
        <li>
          <a
            href={PERSON.social[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {PERSON.social[0].name}
          </a>
        </li>
        <li>
          <a
            href={PERSON.social[1].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {PERSON.social[1].name}
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
