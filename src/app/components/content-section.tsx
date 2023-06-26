import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon
} from '@heroicons/react/20/solid';

export const ContentSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Location de salles de réunion
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Simplifiez votre organisation
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Louez des salles de réunion adaptées à tous vos événements
                d'affaires, conférences ou réunions professionnelles. Notre
                entreprise offre un processus de réservation fluide pour
                simplifier votre expérience.
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://images.pexels.com/photos/8101928/pexels-photo-8101928.jpeg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Simplifiez votre organisation avec notre service de location de
                salles de réunion. Nous proposons des salles adaptées à des
                événements d'affaires de toutes tailles. Notre équipe dédiée est
                là pour vous accompagner à chaque étape du processus.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Réservation facile et rapide.
                    </strong>{' '}
                    Simplifiez votre réservation grâce à notre processus rapide.
                    Gagnez du temps et réservez votre salle de réunion en
                    quelques clics.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Sécurité des données garantie.
                    </strong>{' '}
                    Assurez la sécurité de vos données grâce à nos certificats
                    SSL. Vos informations sont protégées et confidentielles.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Sauvegardes régulières de la base de données.
                    </strong>{' '}
                    Vos données sont importantes. Nous effectuons régulièrement
                    des sauvegardes pour garantir leur intégrité et leur
                    disponibilité.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Simplifiez votre processus de réservation de salle de réunion
                avec notre plateforme conviviale. Notre équipe est là pour vous
                aider à organiser votre événement et répondre à toutes vos
                questions. Profitez d'une expérience sans tracas avec notre
                service de location de salles de réunion.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Pas besoin de vous soucier de l'infrastructure.
              </h2>
              <p className="mt-6">
                Ne vous préoccupez pas de la gestion de l'infrastructure. Nous
                prenons en charge tous les aspects techniques afin que vous
                puissiez vous concentrer ple inement sur votre événement. Grâce
                à notre service de support disponible 24/7, vous bénéficiez
                d'une disponibilité et d'une fiabilité maximales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
