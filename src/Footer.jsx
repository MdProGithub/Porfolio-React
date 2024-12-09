import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './App.css'; // Assurez-vous d'importer le fichier CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                {/* Section des informations du footer avec Flexbox */}
                <div className="d-flex flex-wrap justify-content-between p-5">
                    {/* Section des informations personnelles */}
                    <div className="col-md-3">
                        <h3>John Doe</h3>
                        <ul className='list-unstyled'>
                          <li className='my-2'>
                            <a href="https://maps.app.goo.gl/jkE7ZycqdDXPw8c8A" target="_blank" rel="noopener noreferrer">
                              40 Rue Laure Diebold 69009 Lyon, France
                            </a>
                          </li>
                          <li className='my-2'>
                            <a href="tel:+33620304050">06 20 30 40 50</a>
                          </li>
                          <p className='m-0'>
                            <div className='my-2 justify-content-center link'>
                              <a className='m-2' href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size='2x'color='#1e1e1e'/>
                              </a>
                              <a className='m-2' href="https://twitter.com/twitter-john-doe" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size='2x'color='#1e1e1e'/>
                              </a>
                              <a className='m-2' href="https://www.linkedin.com/in/linkedin-john-doe/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size='2x' color='#1e1e1e'/>
                              </a>  
                            </div>
                          </p>
                        </ul>
                    </div>

                    {/* Liens utiles */}
                    <div className="col-md-3">
                        <h3>Liens utiles</h3>
                        <ul className='list-unstyled'>
                            <li className='my-2'>
                              <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                              <Link to="/">Accueil</Link>
                            </li>                          
                            <li className='my-2'>
                              <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                              <Link to="/contact">Contact</Link>
                            </li>
                            <li className='my-2'>
                              <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                              <Link to="/service">Service</Link>
                            </li>
                            <li className='my-2'>
                              <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                              <Link to="/legalNotice">Mentions légales</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Réalisations */}
                    <div className="col-md-3">
                        <h3>Mes dernières réalisations</h3>
                        <ul className='list-unstyled'>
                            <li className='my-4'>
                              <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                              <a href="/achievement#portfolio">Fresh Food</a>
                            </li>
                            <li className='my-4'>
                              <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                              <a href="/achievement#maquette">Restaurant Akira</a>
                            </li>
                            <li className='my-4'>
                              <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                              <a href="/achievement#javascript">Espace Bien-être</a>
                            </li>
                        </ul>
                    </div>

                    {/* Derniers articles */}
                    <div className="col-md-3">
                        <h3>Mes derniers articles</h3>
                        <ul className='list-unstyled'>
                            <li className='my-2'>
                              <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                              <a href="/blog#article-1">Démystifier le JavaScript moderne</a></li>
                            <li className='my-2'>
                              <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                              <a href="/blog#article-2">Le guide ultime du SEO pour le e-commerce</a></li>
                            <li className='my-2'>
                              <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                              <a href="/blog#article-3">Sécurité web : Protéger votre e-commerce contre les cybermenaces</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bas de page */}
            </div>
                <div className="row m-0">
                    <div className="col-md-12 container-fluid text-center bg-dark my-3">
                        <p className='m-0 p-3 text-white'>&copy; Designed by Jhon Doe</p>
                    </div>
                    
                </div>
        </footer>
    );
}

export default Footer;
