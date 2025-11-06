interface ExperienceHighlight {
  label: string;
  value: string;
}

interface ExperienceSectionProps {
  id: string;
  title: string;
  summary: string;
  highlights: ExperienceHighlight[];
}

const ExperienceSection = ({ id, title, summary, highlights }: ExperienceSectionProps) => {
  return (
    <section id={id} className="bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">{summary}</p>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-transparent bg-white p-6 text-center shadow-sm transition hover:border-amber-300 hover:shadow-lg"
            >
              <dt className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500">{item.label}</dt>
              <dd className="mt-3 text-xl font-semibold text-slate-900">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ExperienceSection;
