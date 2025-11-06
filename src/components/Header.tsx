import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
  siteName: string;
  logo: any[];
  navigation: {
    html: string;
    links: Array<{
      text: string;
      href: string;
    }>;
  }[];
  contactInfo: {
    phone: string;
    email: string;
  };
}

const Header: React.FC<HeaderProps> = ({
  siteName,
  logo,
  navigation,
  contactInfo,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-brand-1 shadow-lg">
      <div className="navbar container mx-auto py-4">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            {siteName}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navigation[0].links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-brand-3 font-medium'
                        : 'text-brand-2 hover:text-brand-3'
                    }`
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href={`tel:${contactInfo.phone}`}
            className="btn btn-ghost text-brand-2 hover:text-brand-3"
          >
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="btn btn-ghost text-brand-2 hover:text-brand-3 ml-4"
          >
            {contactInfo.email}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;