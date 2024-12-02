import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
          {/* Le brand reste à gauche */}
          <Link className="navbar-brand" to="/">
            JHON DOE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Les liens de navigation à droite */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Realisation">
                  Réalisations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Me Contacter
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
