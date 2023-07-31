import React, { useEffect } from "react";
import "../estilos/Style.css";

function Navbar() {
  useEffect(() => {
    const inicio = () => {
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.toggle("mobile-menu");
    };

    const menuHamburger = document.querySelector(".menu-hamburger");
    menuHamburger.addEventListener("click", inicio);

    return () => {
      menuHamburger.removeEventListener("click", inicio);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <a href="" className="logo">
          Art
        </a>
        <div className="nav-links">
          <ul>
            <li className="active">
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Nosotros </a>
            </li>
            <li>
              <a href="">Nuestros Servicios</a>
            </li>
            <li>
              <a href="">Procesos</a>
            </li>
            <li>
              <a href="">Eventos</a>
            </li>
            <li>
              <a href="">Contáctenos</a>
            </li>
          </ul>
        </div>
        <img
          src="menu-btn.png"
          alt="menu hamburguer"
          className="menu-hamburger"
        />
      </nav>
    </>
  );
}

export default Navbar;
