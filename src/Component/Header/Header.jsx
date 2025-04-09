import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import style from "./Header.module.css";
import { logout } from "../../Services/Auth";
import { authContext } from "../../Context/IsAuth";
import toast from "react-hot-toast";

function Header() {
  const [showTooltip, setShowTooltip] = useState(false);
  const { isAuth, setIsAuth } = useContext(authContext);

  let userLogout = async () => {
    await logout();
    setIsAuth(false);
    toast.success("Logout Successfully !");
  };

  const toggleTooltip = () => {
    setShowTooltip((prev) => !prev);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark "
        style={{ background: "rgba(3,37,65,1)" , zIndex:900}}
      >
        <div className="container">
          <a className="navbar-brand " style={{ color: "rgb(29, 199, 255)" }}>
            MovieVerse{" "}
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Home"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Movies/1"
                  aria-current="page"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Favorite"
                  aria-current="page"
                >
                  Favorite
                </Link>
              </li>
              {isAuth ? 
                <li className="nav-item">
           
                  <Link
                  onClick={userLogout}
                  className="nav-link active"
                  to=""
                  aria-current="page"
                >
                  Logout
                </Link>
                </li>
               : 
           <>
           
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        to="/login"
                        aria-current="page"
                      >
                        login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        to="/signup"
                        aria-current="page"
                      >
                        SignUp
                      </Link>
                    </li>
           
           
           </>
                   

              }
            </ul>
            <i
              className="fa fa-search fs-5  "
              style={{ color: "rgb(29, 199, 255)" }}
            ></i>
            <div className="position-relative">
              <i
                className="bi bi-person-circle text-primary fs-4"
                onClick={toggleTooltip}
                style={{ cursor: "pointer" }}
              ></i>
              {showTooltip && (
                <div
                  className="position-absolute bg-light border rounded p-2"
                  style={{ top: "40px", right: "-40px"}}
                >
                  <ul className="list-unstyled mb-0">
                    <li>
                      <button
                        className="btn btn-link text-decoration-none text-dark"
                        onClick={userLogout}
                      >
                        Logout
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-link text-decoration-none text-dark"
                        onClick={() => toast.info("Settings clicked!")}
                      >
                        Settings
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="sticky-top top-0 text-center bg-light w-100" style={{ zIndex: 1 }}>
        <i className="fa fa-search  position-absolute pt-2 ps-2 "></i>
        <input
          type="text"
          className={`${style.searchInput}  w-75 border-0 px-5`}
          placeholder="Search for Your movie"
        />
      </div> */}
    </>
  );
}

export default Header;
