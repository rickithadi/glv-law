import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Section1Props {
  heading: string;
  content: string;
  images: string[];
  links: { text: string; href: string }[];
  id: string;
}

const Section1: React.FC<Section1Props> = ({
  heading,
  content,
  images,
  links,
  id,
}) => {
  return (
    <section className="hero bg-base-100 py-12 md:py-16">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold text-brand-1">{heading}</h2>
          <p className="text-brand-2">{content}</p>
          <div className="flex flex-wrap gap-3">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="btn btn-primary hover:btn-secondary"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
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
    </section>
  );
}

export default Section1;