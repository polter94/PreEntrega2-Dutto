import "./navbar.css";
import logo from "../../assets/eshop.jpg";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div>
      <nav className="navbar">

        <div className="div-innecesario">
        <div>
          <img src={logo} className="logo" alt="" />
        </div>

        <div>
          <ul className="nav-links">
            <li className="nav-item">
              <a href="">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="">Productos</a>
            </li>
            <li className="nav-item">
              <a href="">Nosotros</a>
            </li>
            <li className="nav-item">
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>
        </div>

        <div className="carrito">
          <IoCartOutline size="35px" color="#ff7d01"/>
          <span className="badge">2</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
