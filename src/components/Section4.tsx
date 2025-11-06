import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Component props interface - REQUIRED
interface Section4Props {
  heading: string;
  content: string;
  images: string[];
  links: { text: string; href: string }[];
  id: string;
}

const Section4: React.FC<Section4Props> = ({
  heading,
  content,
  images,
  links,
  id,
}) => {
  return (
    <section id={id} className="py-20 bg-brand-1 text-brand-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">{heading}</h2>
            <p className="text-brand-2 mb-8">{content}</p>
            <div className="flex flex-wrap gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="btn btn-primary btn-sm"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-brand-2 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;