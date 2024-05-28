import React from 'react';
import logo from '../logo/logo.png';

export const Foot_er = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-lg-start nav-footer-color p-3">
      <div className="row">

        {/* Este div contiene el logo de Federal FM */}
        <div className="col-md-12 col-lg-4 text-center m-auto">
          <img className="logo-effect" src={logo} alt="Federal FM Logo" width="300" height="150" />
        </div>
        
        {/* Este div contiene la info de copyright y de desarrollador */}
        <div className="col-md-12 col-lg-4 text-center p-3 m-auto">
          <p className="text-white">© {currentYear} Federal FM 99.1</p>
          <a className="text-white" href="https://github.com/NebyX1">Made By:</a> 
          <a className="text-white neby-font nav-icon-effect" href="https://github.com/NebyX1">&nbsp;<span>Neby_X</span></a>
        </div>

        {/* Este div contiene la info de Contacto y legal */}
        <div className="col-md-12 col-lg-4 text-center m-auto">
          <div>
            <p className="text-white" style={{fontSize: "14px"}}>
              <span><i className="fa-solid fa-house"></i></span> Treinta Y Tres 632 - Minas - Lavalleja - Uruguay
            </p>
            <p className="text-white" style={{fontSize: "14px"}}>
              <span><i className="fa-solid fa-phone"></i></span> Estudio: (+598) 4442 4873 - Comercial: (+598) 4442 4001
            </p>
          </div>
          <div className="ps-5 px-5">
            <p className="text-white" style={{fontSize: "10px"}}>
              En cumplimiento con lo establecido por el artículo 93 inciso 2° de la Ley 19.307, comunicamos que Federal FM es una radiodifusora propiedad de Multiuser S.A. cuyos titulares son Carlos E. Falco - Pablo D. Falco - Hector M. Falco.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
