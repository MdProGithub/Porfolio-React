import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode, faSearch } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      title: "UX DESIGN",
      description:
        "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.",
      icon: faDesktop,
    },
    {
      title: "DÉVELOPPEMENT WEB",
      description:
        "Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.",
      icon: faCode,
    },
    {
      title: "RÉFÉRENCEMENT",
      description:
        "Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.",
      icon: faSearch,
    },

    
  ];

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">MON OFFRE DE SERVICES</h2>
      <p>Voici les prestations sur lesquelles je peux intervenir.</p>
      <hr className="mx-auto mb-3" style={{ width: "30%", border: "2px solid #007bff" }} />
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card p-4 border-0 shadow-sm h-100">
              <div className="mb-3 text-primary">
                <FontAwesomeIcon icon={service.icon} size="2x" />
              </div>
              <h5 className="card-title mb-3">{service.title}</h5>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;