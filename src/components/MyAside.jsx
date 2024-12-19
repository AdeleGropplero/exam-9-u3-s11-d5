import { Container } from "react-bootstrap";

const MyAside = () => {
  return (
    <>
      <Container
        fluid
        className="myAside d-flex flex-column justify-content-between"
      >
        <div className="menu">
          <a className="navbar-brand" href="index.html">
            <img
              src="src/assets/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
              className="logo"
            />
          </a>
          <div>
            <a href="#" className="nav-item nav-link d-flex align-items-center">
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </a>
          </div>

          <div>
            <a className="nav-item nav-link d-flex align-items-center" href="#">
              <i className="bi bi-book-fill"></i>&nbsp; Your Library
            </a>
          </div>

          <div>
            <a className="nav-item nav-link d-flex align-items-center" href="#">
              <i className="bi bi-suit-heart-fill"></i>&nbsp; Your Favorite
            </a>
          </div>

          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary btn-sm h-100">
                GO
              </button>
            </div>
          </div>
        </div>

        <div className="buttons-aside">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <footer>
            <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
          </footer>
        </div>
      </Container>
    </>
  );
};
export default MyAside;
