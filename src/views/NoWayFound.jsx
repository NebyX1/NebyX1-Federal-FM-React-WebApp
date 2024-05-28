import React from "react";
import { Link } from 'react-router-dom';

export const NoWayFound = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center"
      style={{ minHeight: "75vh" }}
    >
      <div className="headings-font mb-4 mt-2">
        <h1 className="display-1" style={{ color: "#8D455E" }}>
          😔 404
        </h1>
      </div>
      <p className="display-6" style={{ color: "#8D455E" }}>
        Lo sentimos, pero parece ser que la página que buscas no se encuentra o
        no existe. 🙈
      </p>
      <p style={{ color: "#8D455E" }}>
        <Link to="/">Vuelve al inicio</Link>
      </p>
    </div>
  );
};
