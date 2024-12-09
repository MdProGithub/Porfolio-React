import React from "react";

const projects = [
  {
    title: "Fresh food",
    description: "Réalisation d'un site avec commande en ligne.",
    buttonText: "Voir",
    footer: "Site réalisé avec PHP et MySQL",
    imageUrl: "https://saveursonaturel.com/wp-content/uploads/2021/08/legumes2.jpg", // Remplacez par l'URL de l'image
  },
  {
    title: "Restaurant Akira",
    description: "Réalisation d'un site vitrine.",
    buttonText: "Voir",
    footer: "Site réalisé avec WordPress",
    imageUrl: "https://sf2.topsante.com/wp-content/uploads/topsante/2023/09/je-suis-dieteticienne-voici-que-commande-restaurant-chinois.jpeg", // Remplacez par l'URL de l'image
  },
  {
    title: "Espace bien-être",
    description: "Réalisation d'un site vitrine pour un praticien de bien-être.",
    buttonText: "Voir",
    footer: "Site réalisé en HTML/CSS",
    imageUrl: "https://st2.depositphotos.com/1000528/11595/i/450/depositphotos_115950960-stock-photo-zen-stones-in-water.jpg", // Remplacez par l'URL de l'image
  },
];

const Portfolio = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">PORTFOLIO</h2>
      <p className="text-center text-muted">
        Voici quelques-unes de mes réalisations.
      </p>
      <hr className="mx-auto mb-4" style={{ width: "30%", border: "2px solid #007bff" }} />
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm">
              <img
                src={project.imageUrl}
                className="card-img-top"
                alt={project.title}
                style={{ height: "200px", width: "100%", objectFit: "cover"}} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <button className="btn btn-primary">{project.buttonText}</button>
              </div>
              <div className="card-footer text-muted text-center">
                {project.footer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;