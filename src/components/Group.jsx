// Seção com rótulo e lista agrupada, como em Ajustes do iOS
export function Group({ id, label, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-label`}>
      <h2 id={`${id}-label`} className="mx-4 mt-10 mb-2 text-[13px] font-normal uppercase tracking-[0.02em] text-suave">
        {label}
      </h2>
      <div className="overflow-hidden rounded-xl bg-celula">{children}</div>
    </section>
  );
}

// Linha da lista, com separador fino entre linhas
export function Row({ children }) {
  return <div className="linha relative flex items-center gap-3 px-4 py-3.5">{children}</div>;
}
