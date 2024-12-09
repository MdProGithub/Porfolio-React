import React from "react";

const blogPosts = [
  {
    title: "Coder son site en HTML/CSS",
    description:
      "Envie de créer votre propre site web ? Cet article vous initie aux bases du HTML et du CSS, les deux langages essentiels pour structurer et styliser vos pages. Que vous soyez débutant ou curieux, découvrez comment donner vie à vos idées en ligne avec des exemples simples et pratiques.",
    buttonText: "Lire la suite",
    date: "Publié le 22 août 2022",
    imageUrl: "https://wallpaperaccess.com/full/8174684.jpg", // Remplacez par l'URL réelle
  },
  {
    title: "Vendre ses produits sur le web",
    description:
      "Dans un monde de plus en plus connecté, vendre ses produits en ligne est devenu incontournable pour toucher un large public. Cet article vous guide à travers les étapes clés pour réussir votre transition vers la vente en ligne : création de boutique, choix des plateformes, et stratégies pour attirer des clients et booster vos ventes.",
    buttonText: "Lire la suite",
    date: "Publié le 20 août 2022",
    imageUrl: "https://www.maetva.com/sites/www/files/2020-08/iStock-1135609382%282%29_0.jpg", // Remplacez par l'URL réelle
  },
  {
    title: "Se positionner sur Google",
    description:
      "Être bien positionné sur Google est essentiel pour gagner en visibilité et attirer des visiteurs sur votre site. Dans cet article, découvrez les bases du référencement naturel (SEO) : choix des mots-clés, optimisation du contenu, et bonnes pratiques pour grimper dans les résultats de recherche et devancer vos concurrents.",
    buttonText: "Lire la suite",
    date: "Publié le 1 août 2022",
    imageUrl: "https://www.keyweo.com/wp-content/uploads/2020/05/google-position-0.jpg", // Remplacez par l'URL réelle
  },
  {
    title: "Coder en responsive design",
    description:
      "Avec la diversité des appareils utilisés pour naviguer sur le web, coder en responsive design est devenu indispensable. Cet article vous explique comment créer des sites qui s’adaptent automatiquement aux écrans de toutes tailles grâce à des techniques simples en HTML et CSS. Offrez une expérience optimale à vos utilisateurs, quel que soit leur appareil !",
    buttonText: "Lire la suite",
    date: "Publié le 31 juillet 2022",
    imageUrl: "https://www.5xperts.ca/wp-content/uploads/2024/03/responsive-web-design-1-61f01c4b64c5f-sej.png", // Remplacez par l'URL réelle
  },
  {
    title: "Techniques de référencement",
    description:
      "Améliorer la visibilité de votre site sur les moteurs de recherche est essentiel pour attirer du trafic qualifié. Dans cet article, nous explorons les techniques de référencement les plus efficaces, du choix des mots-clés à l’optimisation technique, en passant par la création de contenu et les stratégies de netlinking. Passez au niveau supérieur avec un site bien positionné sur Google !",
    buttonText: "Lire la suite",
    date: "Publié le 30 juillet 2022",
    imageUrl: "https://www.powertrafic.fr/wp-content/uploads/2015/11/guide-seo-google.jpg", // Remplacez par l'URL réelle
  },
  {
    title: "Apprendre à coder",
    description:
      "Apprendre à coder est une compétence précieuse dans un monde de plus en plus numérique. Que vous souhaitiez créer des sites web, développer des applications ou automatiser des tâches, cet article vous guide dans vos premiers pas avec les langages de programmation, les outils essentiels et des conseils pratiques pour progresser efficacement.",
    buttonText: "Lire la suite",
    date: "Publié le 12 juillet 2022",
    imageUrl: "https://online.edhec.edu/wp-content/uploads/2022/07/pexels-luis-gomes-546819-1-1920x1275.jpg", // Remplacez par l'URL réelle
  },
];

const Blog = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">BLOG</h2>
      <p className="text-center text-muted">
        Retrouvez ici quelques articles sur le développement web.
      </p>
      <hr className="mx-auto mb-4" style={{ width: "30%", border: "2px solid #007bff" }} />
      <div className="row text-center">
        {blogPosts.map((post, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <img
                src={post.imageUrl}
                className="card-img-top"
                alt={post.title}
                style={{ height: "200px", width: "100%", objectFit: "cover"}} 
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <button className="btn btn-primary">{post.buttonText}</button>
              </div>
              <div className="card-footer text-muted">{post.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;