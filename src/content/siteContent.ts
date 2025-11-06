export interface NavigationItem {
  label: string;
  href: string;
}

export interface CallToAction {
  label: string;
  href: string;
}

export const siteContent = {
  header: {
    firmName: 'Gary L. Voegele, P.A.',
    tagline: 'Your Best Choice for Legal Services',
    location: 'Faribault, Minnesota',
    phone: '507-334-2045',
    email: 'gary@glvlaw.com',
    navigation: [
      { label: 'Practice Areas', href: '#practice-areas' },
      { label: 'About', href: '#about' },
      { label: 'Virtus Partnership', href: '#virtus' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ] satisfies NavigationItem[],
  },
  hero: {
    title: 'Gary L. Voegele, P.A.',
    subtitle: 'Serving Faribault and the surrounding communities since 1980',
    description:
      'Located in Faribault, Minnesota, Gary L. Voegele, P.A. is your go-to, general practice law firm when you need legal counsel. We provide effective and efficient legal representation in an ethical and responsive manner.',
    consultationNumber: '507-334-2045',
    primaryAction: { label: 'Call 507-334-2045', href: 'tel:5073342045' } satisfies CallToAction,
    secondaryAction: { label: 'Explore Practice Areas', href: '#practice-areas' } satisfies CallToAction,
    supportingPoints: [
      'Full-service general law firm focused on client needs',
      'Comprehensive strategies tailored to personal and business goals',
    ],
  },
  practiceAreas: {
    id: 'practice-areas',
    title: 'Practice Areas',
    description:
      'Our legal services are diverse and versatile to assist our clients’ various needs. We are experienced in matters that affect personal lives, relationships, businesses, and community involvement.',
    areas: [
      {
        name: 'Family Law',
        summary: 'Guidance for divorce, custody, parenting time, and family transitions with compassion and clarity.',
      },
      {
        name: 'Personal Injury',
        summary: 'Advocacy for those harmed through negligence, helping you pursue fair compensation.',
      },
      {
        name: 'Real Estate Law',
        summary: 'Support for residential, agricultural, and commercial transactions and disputes.',
      },
      {
        name: 'Estate Planning, Trusts & Wills',
        summary: 'Thoughtful planning to protect assets and honor your intentions for the future.',
      },
      {
        name: 'Probate & Trust Administration',
        summary: 'Responsive counsel for administrators and families navigating probate and trust duties.',
      },
      {
        name: 'Business Law',
        summary: 'Advising privately held businesses on formation, governance, and ongoing operations.',
      },
      {
        name: 'Landlord / Tenant Law',
        summary: 'Representation for property owners and tenants to resolve leasing issues effectively.',
      },
      {
        name: 'Construction Law',
        summary: 'Assistance with contracts, disputes, and risk management for construction projects.',
      },
      {
        name: 'Advice & Litigation Review',
        summary: 'Strategic evaluation of legal matters with access to additional resources when required.',
      },
    ],
  },
  about: {
    id: 'about',
    title: 'A Full-Service General Law Firm',
    paragraphs: [
      'We are a full-service general law firm and have provided effective and efficient legal representation in an ethical and responsive manner since 1980.',
      'Our office is experienced in a wide range of legal practice areas that affect our clients’ personal lives, relationships, businesses, and activities. We are regarded in the community for providing experienced legal help with comprehensive approaches and complete solutions for your legal matters.',
    ],
  },
  partner: {
    id: 'virtus',
    title: 'Strength Through Partnership',
    subtitle: 'Association with Virtus Law',
    paragraphs: [
      'We realize there is strength in collective effort and experience. Therefore, we have become associated with Virtus Law, a boutique law firm based in Minneapolis with over 100 years of combined experience.',
      'Through this collaboration, we provide a broad spectrum of large-firm quality legal services for personal and business clients, developing strategies to meet both short- and long-term goals.',
    ],
  },
  experience: {
    id: 'experience',
    title: 'Over 40 Years of Experience',
    summary:
      'Rarely do legal problems affect an individual in an isolated manner. Outcomes often have critical and long-lasting effects. Our goal is to help clients secure high-quality results in all legal matters at a reasonable price.',
    highlights: [
      { label: 'Established', value: '1980' },
      { label: 'Recognized', value: 'Best Attorneys in Minnesota 2005–2021' },
      { label: 'Comprehensive', value: 'Full-service general practice' },
    ],
  },
  contact: {
    id: 'contact',
    title: 'Contact Gary L. Voegele, P.A.',
    consultationPrompt: 'Call for an initial consultation or contact us to discuss your legal needs.',
    phone: '507-334-2045',
    fax: '507-334-2040',
    email: 'gary@glvlaw.com',
    addressLines: ['102 4th St NW', 'Faribault, MN 55021'],
    officeHours: 'Consultations by appointment',
    disclaimer:
      'This website and the information published within are intended to be informational only and do not constitute legal advice or the formation of an attorney-client relationship.',
  },
  footer: {
    siteName: 'Gary L. Voegele, P.A.',
    tagline: 'Your Best Choice for Legal Services',
    phone: '507-334-2045',
    email: 'gary@glvlaw.com',
    addressLines: ['102 4th St NW', 'Faribault, MN 55021'],
    copyrightHolder: 'Gary L. Voegele, P.A.',
    privacyPolicy: { label: 'Privacy Policy', href: 'https://glvlaw.com/privacy-policy/' },
  },
  seo: {
    title: 'Gary L. Voegele, P.A. | Faribault General Practice Law Firm',
    description:
      'Gary L. Voegele, P.A. is a full-service general practice law firm in Faribault, Minnesota, providing ethical and responsive legal counsel across family law, personal injury, real estate, business law, and more.',
    keywords:
      'Gary L. Voegele, Faribault attorney, general practice law firm, Virtus Law partner, Minnesota legal services',
    canonicalUrl: 'https://glvlaw.com/',
  },
} as const;

export type SiteContent = typeof siteContent;
