import CartWidget from "./CartWidget";
import logo1 from "../assets/logo.png";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div>
        <img style={{ width: "100px" }} src={logo1} />
      </div>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">VIDEOJUEGOS CEX</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">PS4</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PS5</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">SWITCH</a>
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