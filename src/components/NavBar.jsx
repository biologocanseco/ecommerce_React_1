import CartWidget from "./CartWidget";
import logo1 from "../assets/logo.jpg";
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div>
        <img style={{ width: "100px" }} src={logo1} />
      </div>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">La patrona</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Reservaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Costos</a>
            </li>
          </ul>
          <span class="navbar-text">
            <CartWidget />
          </span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar