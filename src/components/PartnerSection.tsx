interface PartnerSectionProps {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
}

const PartnerSection = ({ id, title, subtitle, paragraphs }: PartnerSectionProps) => {
  return (
    <section id={id} className="bg-slate-900 py-16 text-slate-100 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
          <header>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200">{subtitle}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          </header>
          <div className="space-y-6 text-base leading-relaxed text-slate-200">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
