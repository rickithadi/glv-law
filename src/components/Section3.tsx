import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Section3Props {
  heading: string;
  content: string;
  images: Array<{ src: string; alt: string }>;
  links: Array<{ text: string; href: string }>;
  id: string;
}

const Section3: React.FC<Section3Props> = ({
  heading,
  content,
  images,
  links,
  id,
}) => {
  return (
    <section id={id} className="bg-brand-1 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold text-brand-2 mb-4">{heading}</h2>
            <p className="text-brand-2 text-lg mb-8">{content}</p>
            <div className="flex flex-wrap gap-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="btn btn-primary text-brand-1 hover:bg-brand-5 focus:outline-none focus:ring-2 focus:ring-brand-5 focus:ring-offset-2"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-1 grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="card bg-brand-2 shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <figure>
                  <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;