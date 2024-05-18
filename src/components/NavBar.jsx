import CartWidget from "./CartWidget";
import logo1 from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <Link to="/">
        <img style={{ width: "100px" }} src={logo1} />
      </Link>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">VIDEOJUEGOS CEX</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/category/PS4" className="nav-link active">PS4</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/PS5" className="nav-link">PS5</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/SWITCH" className="nav-link">SWITCH</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <CartWidget />
          </span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar