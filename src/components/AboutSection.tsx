interface AboutSectionProps {
  id: string;
  title: string;
  paragraphs: string[];
}

const AboutSection = ({ id, title, paragraphs }: AboutSectionProps) => {
  return (
    <section id={id} className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 lg:flex-row lg:items-start lg:px-6">
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-slate-600 lg:w-2/3">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
