"use client"

import "../styles/contacto.css";
import { motion } from "framer-motion";

function ContactForm() {
  return (
    <motion.div 
    
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      ease: "easeInOut",
      duration: "0.5",
      delay: "0.02",
    }}
    className="form-container">
      <h2 className="form-title">Envíanos un mensaje</h2>
      <form id="contactForm">
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Tu nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="tu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder="Asunto del mensaje"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
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
    </motion.div>
  );
}

export default ContactForm;
