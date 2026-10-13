import { useEffect, useState } from "react";
import { PERSON } from "../data/portfolio";
import Logo from "./Logo";

// Barra translúcida: vazia no topo; ao rolar mostra símbolo e nome, como o título grande do iOS
function Navbar({ t, lang, setLang, theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = "cursor-pointer rounded-full bg-botao px-3 py-1 font-mono text-[13px] font-medium";

  return (
    <header
      className={`sticky top-0 z-10 border-b-[0.5px] bg-barra backdrop-blur-[20px] backdrop-saturate-[1.8] transition-colors duration-200 ${
        scrolled ? "border-separador" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-13 max-w-170 items-center gap-2 px-4">
        <span
          aria-hidden={!scrolled}
          className={`flex items-center gap-2 text-[17px] font-semibold transition-opacity duration-200 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <Logo className="size-4.5" />
          {PERSON.name}
        </span>
        <button
          type="button"
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
          aria-label={t.ui.langSwitch}
          className={`${toggle} ml-auto`}
        >
          {lang === "pt" ? "EN" : "PT"}
        </button>
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={theme === "dark" ? t.ui.themeToLight : t.ui.themeToDark}
          className={toggle}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
