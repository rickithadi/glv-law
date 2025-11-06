interface ContactSectionProps {
  id: string;
  title: string;
  consultationPrompt: string;
  phone: string;
  fax: string;
  email: string;
  addressLines: string[];
  officeHours: string;
  disclaimer: string;
}

const ContactSection = ({
  id,
  title,
  consultationPrompt,
  phone,
  fax,
  email,
  addressLines,
  officeHours,
  disclaimer,
}: ContactSectionProps) => {
  const sanitizedPhone = phone.replace(/[^\d]/g, '');
  const sanitizedFax = fax.replace(/[^\d]/g, '');

  return (
    <section id={id} className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-slate-600">{consultationPrompt}</p>
            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">Phone</span>
                <a
                  href={`tel:${sanitizedPhone}`}
                  className="mt-1 inline-flex text-base font-semibold text-slate-900 transition hover:text-amber-500"
                >
                  {phone}
                </a>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">Fax</span>
                <a href={`tel:${sanitizedFax}`} className="mt-1 inline-flex text-base text-slate-900">
                  {fax}
                </a>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">Email</span>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 inline-flex text-base text-slate-900 transition hover:text-amber-500"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Office</h3>
              <div className="mt-3 space-y-1 text-sm text-slate-600">
                {addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">{officeHours}</p>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">{disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
