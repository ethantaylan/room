import React from 'react';
import { NavLink } from 'react-router-dom';

const footerData = [
  {
    sectionTitle: 'Nos salles',
    links: [
      { title: 'Paris', link: '/les-salles' },
      { title: 'Lyon', link: '/les-salles' },
      { title: 'Marseille', link: '/les-salles' }
    ]
  },
  {
    sectionTitle: 'Réseaux sociaux',
    links: [
      { title: 'Follow us', link: 'https://github.com/themesberg/flowbite' },
      { title: 'Github', link: 'https://discord.gg/4eeurUVvTy' }
    ]
  },
  {
    sectionTitle: 'Aide',
    links: [
      { title: 'Legal', link: '#' },
      { title: 'Privacy Policy', link: '#' },
      { title: 'Terms & Conditions', link: '#' }
    ]
  }
];

export const Footer: React.FC = () => {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="absolute left-0 w-full bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" onClick={toTop} className="flex items-center">
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                ROOM
              </span>
            </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            {footerData.map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm text-gray-900 dark:text-white">
                  {section.sectionTitle}
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li className="mb-4" key={linkIndex}>
                      <NavLink to={link.link} onClick={toTop} className="hover:underline">
                        {link.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
