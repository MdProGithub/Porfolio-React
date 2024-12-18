import React from 'react';

const Contact = () => {
  return (
    <div
      className="container-fluid p-5"
      style={{
        backgroundImage: "url('../src/assets/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container bg-white shadow-lg rounded p-5">
        <h2 className="text-center mb-4">ME CONTACTER</h2>
        <p className="text-center mb-5">
          Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
        </p>

        <div className="row">
          {/* Formulaire de contact */}
          <div className="col-md-6">
            <h4>Formulaire de contact</h4>
            <hr />
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre adresse email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sujet"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Votre message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Envoyer
              </button>
            </form>
          </div>

          {/* Coordonnées */}
          <div className="col-md-6">
            <h4>Mes coordonnées</h4>
            <hr />
            <p>
              <strong>Adresse : </strong>40 Rue Laure Diebold, 69009 Lyon, France
            </p>
            <p>
              <strong>Téléphone : </strong>06 20 30 40 50
            </p>
            <div className="mt-3">
              {/* Intégration Google Maps */}
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.855881130151!2d4.813011915495479!3d45.78638957910681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c0ebae1a799b%3A0xd9c7df7c7ef29cdb!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sen!2sfr!4v1696371234567!5m2!1sen!2sfr"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;