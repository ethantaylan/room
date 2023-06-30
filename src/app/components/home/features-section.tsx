import { CheckIcon, GlobeAltIcon, UsersIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Emplacements stratégiques',
    description:
      "Salles de réunion situées dans des emplacements stratégiques, facilement accessibles et proches des centres d'affaires.",
    icon: GlobeAltIcon,
  },
  {
    name: 'Capacité flexible',
    description:
      "Options de location avec une capacité flexible, adaptées à vos besoins, que vous ayez une petite réunion ou un événement d'entreprise.",
    icon: UsersIcon,
  },
  {
    name: 'Sécurité renforcée',
    description:
      "Sécurité renforcée pour assurer la confidentialité de vos réunions, avec un contrôle d'accès strict et des mesures de protection des données.",
    icon: ShieldCheckIcon,
  },
  {
    name: 'Équipements de qualité',
    description:
      'Salles de réunion entièrement équipées avec des technologies de pointe, des équipements audiovisuels et une connectivité Internet fiable.',
    icon: CheckIcon,
  },
];

export const FeaturesSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Des espaces adaptés</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tout ce dont vous avez besoin pour vos réunions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Des salles de réunion parfaitement équipées pour répondre à vos exigences. Nous nous occupons de tout, pour que vous puissiez vous concentrer sur vos réunions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
