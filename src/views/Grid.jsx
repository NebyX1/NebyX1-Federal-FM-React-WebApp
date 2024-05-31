import React from 'react';

export const Grid = () => {
  return (
    <div className="container py-5">
      <div className="headings-font mb-2 mt-2">
        <h1 className="display-2 text-center" style={{ color: "#8D455E" }}>Nuestra Programación</h1>
      </div>
      <div className="table-responsive mt-5">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Lunes a Viernes</th>
              <th>Sábados</th>
              <th>Domingos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>De 00:00 a 05:00 hs</th>
              <td>La música de Franco Benvenuto</td>
              <td></td>
              <td>La música con Franco Benvenuto</td>
            </tr>
            <tr>
              <th>De 05:00 a 07:00 hs</th>
              <td>Desayuno y Noticias</td>
              <td>Desayuno y Noticias resumen semanal</td>
              <td>La música con Franco Benvenuto</td>
            </tr>
            <tr>
              <th>De 07:00 a 09:00 hs</th>
              <td>Vivir la Radio</td>
              <td>Desayuno y Noticias resumen semanal</td>
              <td>La música con Franco Benvenuto</td>
            </tr>
            <tr>
              <th>De 09:00 a 11:00 hs</th>
              <td>Brújula Departamental</td>
              <td>Sin pelos en la Lengua</td>
              <td>La música con Franco Benvenuto</td>
            </tr>
            <tr>
              <th>De 11:00 a 13:00 hs</th>
              <td>La Isla</td>
              <td>Sin pelos en la Lengua</td>
              <td>La música con Franco Benvenuto</td>
            </tr>
            <tr>
              <th>De 13:00 a 14:00 hs</th>
              <td>Entre Líneas</td>
              <td>Los que más Suenan</td>
              <td>La música con Franco Benvenuto</td>
            </tr>
            <tr>
              <th>De 14:00 a 18:00 hs</th>
              <td>Tarde Feroz</td>
              <td>La música con Franco Benvenuto</td>
              <td>La música con Franco Benvenuto</td>
            </tr>
            <tr>
              <th>De 18:00 a 20:00 hs</th>
              <td>Palabras más Palabras menos</td>
              <td>La música con Franco Benvenuto</td>
              <td>La música con Franco Benvenuto</td>
            </tr>
            <tr>
              <th>De 20:00 a 21:00 hs</th>
              <td>Telemundo</td>
              <td>La música con Franco Benvenuto</td>
              <td>La música con Franco Benvenuto</td>
            </tr>
            <tr>
              <th>De 21:00 a 23:00 hs</th>
              <td>La noche con Marcos Roberto</td>
              <td>La música con Franco Benvenuto</td>
              <td>La música con Franco Benvenuto</td>
            </tr>
            <tr>
              <th>De 23:00 a 00:00 hs</th>
              <td>La música de Franco Benvenuto</td>
              <td>La música con Franco Benvenuto</td>
              <td>La música con Franco Benvenuto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

