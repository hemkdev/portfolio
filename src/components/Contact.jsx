import { PERSON } from "../data/portfolio";

function Contact({ value }) {
  return (
    <section id="contact" className="mx-auto w-full max-w-3xl px-6 pb-20 pt-12">
      <div
        className={`rounded-lg border p-8 text-center transition-colors duration-300 ${
          value ? "border-gray-200" : "border-white/8"
        }`}
      >
        <h2 className="text-2xl font-semibold">Get in touch</h2>
        <p
          className={`mx-auto mt-3 max-w-sm text-sm leading-relaxed ${
            value ? "opacity-60" : "opacity-50"
          }`}
        >
          Open to new opportunities and collaborations. Feel free to reach out
          through any of these channels.
        </p>
      </div>

      <p
        className={`mt-10 text-center text-xs ${
          value ? "opacity-30" : "opacity-25"
        }`}
      >
        {PERSON.name} · {new Date().getFullYear()}
      </p>
    </section>
  );
}

export default Contact;
