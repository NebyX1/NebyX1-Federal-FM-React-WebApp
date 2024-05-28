import React from 'react';
import studio from '../assets/images/studio.jpg';

export const About = () => {
  return (
    <div className="d-flex flex-column flex-md-row" style={{ minHeight: "80vh" }}>
    <div className="col-12 col-md-3 d-flex justify-content-center p-3">
      <img src={studio} className="img-fluid rounded-circle" style={{ objectFit: "cover", width: "100%", maxWidth: "250px", height: "250px" }} alt="Federal FM" />
    </div>
    <div className="col-12 col-md-9 p-3">
      <div className="headings-font mb-2 mt-2">
        <h1 className="display-2" style={{ color: "#8D455E" }}>Sobre Nosotros</h1>
      </div>
      <div>
        <div className="heading-size d-flex align-items-center">
          <h2 className="ms-2 headings-font text-white">Misión:</h2>
        </div>
        <p style={{ color: "#8D455E" }}>
          Federal FM tiene como misión principal ofrecer una programación de calidad y relevante para nuestra audiencia en la ciudad de Minas y en el departamento de Lavalleja. Nos esforzamos por proporcionar información precisa y oportuna, promover la cultura local, y compartir música de calidad. Creemos firmemente en la transparencia de nuestros procesos y tenemos la vocación de servir a nuestra ciudadanía con la más alta dedicación.
        </p>
      </div>
      <div>
        <div className="heading-size d-flex align-items-center">
          <h2 className="ms-2 headings-font text-white">Visión:</h2>
        </div>
        <p style={{ color: "#8D455E" }}>
          Nuestra visión es expandirnos más allá de nuestras fronteras locales y llegar a toda el Uruguay, e incluso al mundo. Aspiramos a convertirnos en un medio de referencia, reconocido por nuestras producciones de alta calidad y nuestra capacidad para conectar a las personas con la información y la cultura que valoran.
        </p>
      </div>
      <div>
        <div className="heading-size d-flex align-items-center">
          <h2 className="ms-2 headings-font text-white">Valores:</h2>
        </div>
        <p style={{ color: "#8D455E" }}>
          Nuestros valores incluyen la integridad, el compromiso con la verdad y la transparencia, el respeto por nuestra audiencia y nuestra comunidad, y la pasión por la música, la cultura y el darle un espacio a todas las opiniones en su gran diversidad intelectual. Creemos en la promoción de la diversidad en su más amplio sentido y la inclusión a través de nuestra programación.
        </p>
      </div>
    </div>
  </div>
  )
}
