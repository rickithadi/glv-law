import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Section5Props {
  heading: string;
  content: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  links: Array<{
    text: string;
    href: string;
  }>;
  id: string;
}

const Section5: React.FC<Section5Props> = ({
  heading,
  content,
  images,
  links,
  id,
}) => {
  return (
    <section id={id} className="py-16 bg-brand-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-brand-1">{heading}</h2>
              <p className="py-6 text-brand-1">{content}</p>
              <div className="card-actions justify-start">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="btn btn-primary btn-sm"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div key={index} className="card bg-brand-1 shadow-lg">
                  <figure>
                    <img src={image.src} alt={image.alt} />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;