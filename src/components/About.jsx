import { ABOUT_TEXT } from "../data/portfolio";

function About() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-12">
      <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
      <p className="leading-relaxed opacity-90">
        {ABOUT_TEXT}
      </p>
    </section>
  );
}

export default About;
