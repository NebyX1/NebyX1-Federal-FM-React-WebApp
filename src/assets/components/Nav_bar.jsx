import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../logo/logo.png';

export const Nav_bar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-footer-color">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img className="mx-3 logo-effect" src={logo} alt="Federal FM Logo" width="100" height="50" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link nav-icon-effect link-font" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-icon-effect link-font" to="/acerca">Sobre Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-icon-effect link-font" to="/programacion">Programación</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-icon-effect link-font" to="/contacto">Contacto</NavLink>
            </li>
          </ul>
          <div className="ms-auto d-flex mx-5">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="nav-icon-effect mx-2">
              <i style={{fontSize: "30px"}} className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="nav-icon-effect mx-2">
              <i style={{fontSize: "30px"}} className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="nav-icon-effect mx-2">
              <i style={{fontSize: "30px"}} className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="nav-icon-effect mx-2">
              <i style={{fontSize: "30px"}} className="fa-brands fa-square-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}