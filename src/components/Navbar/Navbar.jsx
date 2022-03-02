import React from "react";
//import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark relative">
        <div className="container-fluid main">
          <div>
            <a className="navbar-brand" href="/">
              Online-Movies
            </a>
            <a className="navbar-brand mx-3" href="/">
              Home
            </a>
            <a className="navbar-brand mx-3" href="/">
              Tending Movie
            </a>
           
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link navbar-brand text-light"
                  href="/"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genres
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                    Adventure
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                    Comedy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                    Romance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                    Romance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                    Family
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                    Animation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                    Drama
                    </a>
                  </li>

                </ul>
              </li>
            </ul>
          </div>
          
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            <a className="navbar-brand mx-3" href="/">
              LOGIN
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
