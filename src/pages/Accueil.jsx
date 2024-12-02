import {useEffect, useState} from 'react';
import HeroBg from '../assets/hero-bg.jpg';
import JhonDoeDesk from '../assets/john-doe-about.jpg';
import JohnDoeTab from '../assets/about.jpg';

const Home = () => {

    function JhonDoe() {
        const [userData, setUserData] = useState(null);
      
        useEffect(() => {
          fetch('https://api.github.com/users/github-john-doe')
            .then(response => response.json())
            .then(data => {
              setUserData(data);
            })
            .catch(error => {
              console.error('Erreur lors de la récupération des données:', error);
            });
        }, []);
      
        if (!userData) {
          return <div>Chargement en cours...</div>;
        }

        return (
          <div className="container-fluid mt-5">
          <div className="row shadow p-3 m-5 bg-white rounded">
            <div className="col-md-6 ">
              <h2>À propos</h2>
              <hr/>
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'
                <strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
              </p>
              <p>
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
              </p>
            </div>
            <div className="col-md-6">
            <picture>
 
  <source media="(max-width: 1350px)" srcSet={JohnDoeTab} />
  {/* Image de fallback, nécessaire si aucune condition n'est remplie */}
  <img src={JhonDoeDesk} alt="yes"/>
</picture>
              
              <h2>Mes compétences</h2>
              <ul className="list-unstyled">
                <li>HTML5 <div className="progress"><div className="progress-bar" style={{ width: '90%' }}>90%</div></div></li>
                <li>CSS3 <div className="progress"><div className="progress-bar bg-success" style={{ width: '80%' }}>80%</div></div></li>
                <li>JavaScript <div className="progress"><div className="progress-bar bg-warning" style={{ width: '70%' }}>70%</div></div></li>
                <li>PHP <div className="progress"><div className="progress-bar bg-info" style={{ width: '60%' }}>60%</div></div></li>
                <li>React <div className="progress"><div className="progress-bar bg-primary" style={{ width: '50%' }}>50%</div></div></li>
              </ul>
            </div>
          </div>
        </div>
        );
    }
      
    return (
        <div className="container-fluid" style={{ padding: '0' }}>
  <div
    className="container-fluid text-center text-white d-flex justify-content-center align-items-center"
    style={{
      backgroundImage: `url(${HeroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "60vh", // Hauteur de 80% de la fenêtre
      padding: "100px 0",
      color: "white",
      display: "flex", // Flexbox pour l'alignement
      justifyContent: "center", // Centrage horizontal
      alignItems: "center", // Centrage vertical
      flexDirection: "column" // Les éléments sont empilés verticalement (h1, p, bouton)
    }}
  >
    <h1>Bonjour, je suis John Doe</h1>
    <p>Développeur web full stack</p>
    <a href="#" className="btn btn-primary">En savoir plus</a>
  </div>


            <JhonDoe />  
        </div>
    )
}

export default Home ;
