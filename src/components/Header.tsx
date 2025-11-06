import type { NavigationItem } from '../content/siteContent';

interface HeaderProps {
  firmName: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  navigation: NavigationItem[];
}

const Header = ({ firmName, tagline, location, phone, email, navigation }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80 text-slate-100 shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between lg:px-6">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-300">{location}</span>
          <span className="text-2xl font-semibold tracking-tight text-white">{firmName}</span>
          <span className="text-sm text-slate-300">{tagline}</span>
        </div>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-100/90 md:justify-center">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition hover:bg-slate-800/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-1 text-sm md:text-right">
          <a
            href={`tel:${phone.replace(/[^\d]/g, '')}`}
            className="font-semibold text-white transition hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {phone}
          </a>
          <a
            href={`mailto:${email}`}
            className="text-slate-200 transition hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {email}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
