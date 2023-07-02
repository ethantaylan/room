import { NavLink } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Conseils pour une réunion réussie',
    href: '#',
    description:
      "Découvrez nos meilleurs conseils pour organiser une réunion productive et efficace. Améliorez la collaboration et maximisez les résultats de vos réunions d'affaires.",
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: { title: 'Conseils', href: '#' },
    author: {
      name: 'Sophie Martin',
      role: 'Experte en gestion de réunions',
      href: '#',
      imageUrl:
        'https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  },
  {
    id: 2,
    title: "Les avantages d'une salle de réunion moderne",
    href: '#',
    description:
      "Découvrez comment une salle de réunion moderne peut stimuler la créativité, favoriser la collaboration et améliorer l'expérience de vos réunions professionnelles.",
    date: 'Avr 12, 2023',
    datetime: '2023-04-12',
    category: { title: 'Salle de réunion', href: '#' },
    author: {
      name: 'Alexandre Dupont',
      role: "Architecte d'intérieur",
      href: '#',
      imageUrl:
        'https://images.pexels.com/photos/415326/pexels-photo-415326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  },
  {
    id: 3,
    title: 'Optimisez vos réunions avec la technologie',
    href: '#',
    description:
      "Découvrez comment l'utilisation de la technologie lors de vos réunions peut améliorer l'efficacité, la collaboration et l'engagement des participants. Explorez les outils et les solutions adaptés à vos besoins.",
    date: 'Mai 5, 2023',
    datetime: '2023-05-05',
    category: { title: 'Technologie', href: '#' },
    author: {
      name: 'Julien Dubois',
      role: 'Expert en solutions technologiques',
      href: '#',
      imageUrl:
        'https://images.pexels.com/photos/1685114/pexels-photo-1685114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  }
];

export const BlogSection: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Apprenez comment améliorer votre entreprise avec nos conseils
            d'experts.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map(post => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <NavLink to={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </NavLink>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <NavLink to={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </NavLink>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
