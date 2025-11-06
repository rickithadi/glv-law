interface FooterProps {
  siteName: string;
  tagline: string;
  phone: string;
  email: string;
  addressLines: string[];
  copyrightHolder: string;
  privacyPolicy: { label: string; href: string };
}

const Footer = ({ siteName, tagline, phone, email, addressLines, copyrightHolder, privacyPolicy }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:flex-row lg:justify-between lg:px-6">
        <div className="max-w-md space-y-3">
          <h2 className="text-2xl font-semibold text-white">{siteName}</h2>
          <p className="text-sm text-slate-300">{tagline}</p>
          <div className="text-sm">
            <a href={`tel:${phone.replace(/[^\d]/g, '')}`} className="block hover:text-amber-300">
              {phone}
            </a>
            <a href={`mailto:${email}`} className="block hover:text-amber-300">
              {email}
            </a>
          </div>
        </div>
        <div className="space-y-3 text-sm text-slate-300">
          <div>
            {addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a href={privacyPolicy.href} className="inline-flex items-center gap-2 text-sm text-amber-200 hover:text-amber-300">
            {privacyPolicy.label}
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © {currentYear} {copyrightHolder}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
