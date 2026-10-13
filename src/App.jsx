import { useEffect, useState } from "react";
import { CONTENT } from "./data/portfolio";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Logo from "./components/Logo";

const root = document.documentElement;

function App() {
  // Valores iniciais já aplicados no <html> pelo script inline do index.html
  const [lang, setLang] = useState(root.lang.startsWith("pt") ? "pt" : "en");
  const [theme, setTheme] = useState(root.dataset.theme === "dark" ? "dark" : "light");
  const t = CONTENT[lang];

  useEffect(() => {
    root.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    try { localStorage.setItem("lang", lang); } catch { /* armazenamento indisponível */ }
  }, [lang, t]);

  useEffect(() => {
    root.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch { /* armazenamento indisponível */ }
  }, [theme]);

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <main className="mx-auto max-w-170 px-4 pt-2">
        <Hero t={t} />
        <Projects id="projects" label={t.sections.projects} items={t.projects} />
        <Projects id="open-source" label={t.sections.openSource} items={t.openSource} />
        <Experience t={t} />
        <Skills t={t} />
        <Education t={t} />
      </main>
      <footer className="mx-auto mt-16 flex max-w-170 items-center justify-center gap-2 px-4 pb-12 font-mono text-[13px] text-suave">
        <Logo className="size-5 text-texto" />
        hemk.dev
      </footer>
    </>
  );
}

export default App;
