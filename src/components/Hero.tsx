interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  consultationNumber: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  supportingPoints: string[];
}

const Hero = ({
  title,
  subtitle,
  description,
  consultationNumber,
  primaryAction,
  secondaryAction,
  supportingPoints,
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.15),_transparent_55%)]" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24 lg:px-6">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            {subtitle}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-100/90 sm:text-lg">
            {description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={primaryAction.href}
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            >
              {primaryAction.label}
            </a>
            <a
              href={secondaryAction.href}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:border-amber-300 hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {secondaryAction.label}
            </a>
          </div>
          <ul className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
            {supportingPoints.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Call For Initial Consultation</p>
            <p className="mt-4 text-3xl font-semibold text-white">{consultationNumber}</p>
            <p className="mt-6 text-sm text-slate-200">
              Trusted counsel for individuals, families, and businesses in southern Minnesota.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
