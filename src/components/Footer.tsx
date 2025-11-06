import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface FooterProps {
  siteName: string;
  text: string;
  links: Array<{ text: string; href: string; internal: boolean }>;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  socialLinks: Array<{ text: string; href: string; internal: boolean }>;
  html: string;
}

const Footer: React.FC<FooterProps> = ({
  siteName,
  text,
  links,
  contactInfo,
  socialLinks,
  html,
}) => {
  return (
    <footer className="bg-brand-1 text-brand-2 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <h3 className="text-2xl font-medium mb-4">{siteName}</h3>
            <p className="text-brand-2 mb-6">{text}</p>
            <div className="flex flex-col space-y-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-brand-2 hover:text-brand-3 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-4">Contact</h3>
            <div className="flex flex-col space-y-3">
              <a
                href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                className="text-brand-2 hover:text-brand-3 transition-colors"
              >
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-brand-2 hover:text-brand-3 transition-colors"
              >
                {contactInfo.email}
              </a>
              <p className="text-brand-2">{contactInfo.address}</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-4">Social</h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-brand-2 hover:text-brand-3 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="mt-12 border-t border-brand-2 pt-6 text-center text-sm text-brand-2">
          &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;