import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import icon from '/vite.svg';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <Link to={'/'} className="navbar-brand">
            Laravel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/clubs" className="nav-link">
                  Clubs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" className="nav-link">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tournaments" className="nav-link">
                  Tournaments
                </Link>
              </li>
              <li className="nav-item">
                <Dropdown>
                  <Dropdown.Toggle>Config</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/formats">Formats</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/tiebreakings">Tiebreakings</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hoang
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
