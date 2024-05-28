import React, { useRef } from 'react';
import Swal from 'sweetalert2'; // Asegúrate de tener instalado sweetalert2

export const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !subject || !message) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos son obligatorios',
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingresa un email válido',
      });
      return;
    }

    const mailSubject = `${name} ${subject}`;
    const link = document.createElement('a');
    link.href = `mailto:federalfm99.1@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(message)}&cc=${encodeURIComponent(email)}`;
    link.click();

    // Limpiar los campos del formulario después de enviar
    nameRef.current.value = '';
    emailRef.current.value = '';
    subjectRef.current.value = '';
    messageRef.current.value = '';
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  return (
    <div className="d-flex flex-column flex-md-row h-100 align-items-center justify-content-center">
    <div className="col-12 col-md-9 p-3 text-center">
      <div className="headings-font mb-2 mt-2">
        <h1 className="display-2" style={{ color: '#8D455E' }}>Contacto</h1>
      </div>

      <div className="mt-5">
        <div className="mb-2 heading-size d-flex align-items-center justify-content-center">
          <h2 className="ms-2 headings-font text-white">Datos de Contacto:</h2>
        </div>
        <p style={{ color: '#8D455E' }}>
          Treinta Y Tres 632 - Minas - Lavalleja - Uruguay<br />
          Estudio: (+598) 4442 4873 - Comercial: (+598) 4442 4001
        </p>
      </div>
      
      <div className="mt-5">
        <div className="mb-2 heading-size d-flex align-items-center justify-content-center">
          <h2 className="ms-2 headings-font text-white">Envíanos un mensaje:</h2>
        </div>
        <a href="https://wa.me/59844424873?text=Hola%20Federal%20FM" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/96/000000/whatsapp.png" style={{ borderRadius: '50%', backgroundColor: '#25D366' }} alt="WhatsApp" />
        </a>
      </div>

      <div className="mt-5">
        <div className="mb-2 heading-size d-flex align-items-center justify-content-center">
          <h2 className="ms-2 headings-font text-white">Visitanos:</h2>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13171.83484156868!2d-55.2376163!3d-34.3769704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x950aba3007f780eb%3A0x81d7377933d0ef82!2sFederal%20Fm%2099.1!5e0!3m2!1ses-419!2suy!4v1689146771996!5m2!1ses-419!2suy" 
          width="600" 
          height="450" 
          style={{ border: '0' }} 
          allowFullScreen 
          loading="lazy" 
          title="Mapa de Federal FM"
        ></iframe>
      </div>

      <div className="mt-5">
        <div className="heading-size d-flex align-items-center justify-content-center">
          <h2 className="ms-2 headings-font text-white">Envíanos un mail:</h2>
        </div>
        <form id="contactForm" className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" id="name" placeholder="Nombre" ref={nameRef} />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" id="email" placeholder="Email" ref={emailRef} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="subject" placeholder="Asunto" ref={subjectRef} />
        </div>
        <div className="mb-3">
          <textarea className="form-control" id="message" rows="3" style={{ resize: 'none' }} placeholder="Mensaje" ref={messageRef}></textarea>
        </div>
        <button type="submit" className="btn" style={{ backgroundColor: '#E06469', color: 'white' }}>Enviar</button>
      </form>
      </div>
    </div>
  </div>
  )
}
