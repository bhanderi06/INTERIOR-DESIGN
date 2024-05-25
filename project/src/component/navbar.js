import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-color navbar-expand-lg">
        <div className="container-fluid font-color">
          <Link className="navbar-brand" to={"/"}>
            <img src="https://www.pngkey.com/png/full/842-8425281_lululemon-logo-png-home-logo-transparent-white.png" className="logo" alt="" />
             {/* Interior Design */}
            {/* INTERIOR DESIGN */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to={"/"}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to={"/login"}
                >
                  LOG- IN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/service"}>
                  SERVICE
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PORTFOLIO
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/portfolio"}>
                      portfolio
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to={"/pavilion"}>
                      Pavilion O
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/sevilla"}>
                      Villa Sevilla
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/manila"}>
                      Villa Manila
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/degin"}>
                      Stander Design
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  href="./blog.html"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BLOG
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/blog"}>
                      blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/blog-service"}>
                      Our Service
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/formats"}>
                      Post Formats
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/standard"}>
                      standard
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/contact"}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
