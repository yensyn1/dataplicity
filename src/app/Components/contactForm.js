import "../styles/contacto.css";

function ContactForm() {
  return (
    <div class="form-container">
      <h2 class="form-title">Envíanos un mensaje</h2>
      <form id="contactForm">
        <div class="form-group">
          <label for="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Tu nombre"
          />
        </div>

        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="tu@email.com"
          />
        </div>

        <div class="form-group">
          <label for="subject">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder="Asunto del mensaje"
          />
        </div>

        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <button className="button" type="submit">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
