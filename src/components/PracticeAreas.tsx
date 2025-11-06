interface PracticeArea {
  name: string;
  summary: string;
}

interface PracticeAreasProps {
  id: string;
  title: string;
  description: string;
  areas: PracticeArea[];
}

const PracticeAreas = ({ id, title, description, areas }: PracticeAreasProps) => {
  return (
    <section id={id} className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">{description}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.name}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-900">{area.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{area.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
