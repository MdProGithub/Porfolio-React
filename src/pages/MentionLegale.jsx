import React from 'react';

const Mention = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">MENTIONS LÉGALES</h2>
      <hr className="mb-5" style={{ borderColor: "blue", opacity: 1 }} />

      <div className="accordion" id="legalAccordion">
        {/* Éditeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              <strong>Nom : </strong>John Doe <br />
              <strong>Email : </strong>johndoe@example.com
            </div>
          </div>
        </div>

        {/* Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              <strong>Hébergeur : </strong>Hostinger<br />
              <strong>Adresse : </strong>40 Rue Laure Diebold 69009 Lyon, France

            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              <strong>Crédits : </strong>Site développé par John Doe, developper web.<br />
              Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mention;