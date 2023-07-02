import React from 'react';
import { NavLink } from 'react-router-dom';

export const AboutUsSection: React.FC = () => {
  return (
    <section className="overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:w-6/12">
            <div className="-mx-3 flex items-center sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    src="https://i.ibb.co/rfHFq15/image-2.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                  <span className="absolute -bottom-7 -right-7 z-[-1]"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="text-indigo-600 mb-2 block text-lg font-semibold">
                Pourquoi nous ?
              </span>
              <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                Notre objéctif: La réussite de votre meeting.
              </h2>
              <p className="text-body-color mb-8 text-base">
                Chez ROOM, nous comprenons l'importance d'un espace inspirant et
                fonctionnel pour des réunions réussies. Nous nous efforçons de
                vous offrir des salles de réunion de qualité supérieure qui
                répondent à vos besoins professionnels et stimulent la
                productivité de votre équipe.
              </p>
              <br />
              <p className="text-body-color mb-8 text-base">
                Notre équipe expérimentée se consacre à fournir un service
                impeccable, en veillant à ce que chaque détail soit pris en
                compte pour rendre votre expérience chez ROOM inoubliable. Que
                vous ayez besoin d'une salle de réunion pour une petite réunion
                d'équipe, une présentation importante ou une séance de
                formation, nous avons l'espace idéal pour vous.
              </p>
              <br />
              <p className="text-body-color mb-8 text-base">
                Ce qui distingue ROOM des autres entreprises de location de
                salles de réunion, c'est notre engagement envers la qualité.
                Chacune de nos salles est conçue avec soin, offrant un
                environnement moderne, confortable et équipé des dernières
                technologies. De plus, nous veillons à ce que nos espaces soient
                constamment entretenus pour répondre aux normes les plus élevées
                de propreté et de fonctionnalité.
              </p>
              <br />
              <p className="text-body-color mb-8 text-base">
                Découvrez dès maintenant nos salles de réunion exceptionnelles
                et réservez votre espace chez ROOM. Nous sommes impatients de
                vous accueillir et de vous offrir une expérience de location de
                salle de réunion incomparable.
              </p>
              <NavLink
                to="/les-salles"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Découvrir nos salles
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
