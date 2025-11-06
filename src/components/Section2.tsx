import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Component props interface
interface Section2Props {
  heading: string;
  content: string;
  images: Array<{ src: string; alt: string }>;
  links: Array<{ text: string; href: string }>;
  id: string;
}

const Section2: React.FC<Section2Props> = ({
  heading,
  content,
  images,
  links,
  id,
}) => {
  return (
    <section id={id} className="bg-brand-1 py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-brand-6 mb-4">{heading}</h2>
            <p className="text-brand-2 mb-8">{content}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.href}
                  className="btn btn-primary hover:bg-brand-5 hover:border-brand-5 transition-colors"
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      {images.length > 0 && (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="card bg-brand-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <figure>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-brand-1 font-bold">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Section2;