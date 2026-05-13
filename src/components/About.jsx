import { ABOUT_TEXT } from "../data/portfolio";

function About({ value }) {
  return (
    <section id="about" className="mx-auto w-full max-w-3xl px-6 py-12">
      <h2 className="mb-4 text-2xl font-semibold">About</h2>
      <p
        className={`text-sm leading-relaxed ${
          value ? "opacity-75" : "opacity-65"
        }`}
      >
        {ABOUT_TEXT}
      </p>
    </section>
  );
}

export default About;
