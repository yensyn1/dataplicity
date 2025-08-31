import "../styles/contacto.css";

function Contacto() {
    return (
        <main>
            <header>
                <h1>Contactanos!</h1>
                <p class="header-subtitle">Estamos aquí para ayudarte</p>
            </header>

            <div class="whatsapp-oval">
                <div class="whatsapp-icon">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <p>
                    ¿Prefieres contactarnos directamente por WhatsApp?
                    <br />
                    Estamos disponibles para responder tus preguntas.
                </p>
                <a href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20obtener%20más%20información" class="whatsapp-button">
                    {" "}
                    <i class="fab fa-whatsapp"></i> Chatear por WhatsApp{" "}
                </a>
            </div>

            <div class="form-container">
                <h2 class="form-title">Envíanos un mensaje</h2>
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name">Nombre completo</label>
                        <input type="text" id="name" name="name" required placeholder="Tu nombre" />
                    </div>

                    <div class="form-group">
                        <label for="email">Correo electrónico</label>
                        <input type="email" id="email" name="email" required placeholder="tu@email.com" />
                    </div>

                    <div class="form-group">
                        <label for="subject">Asunto</label>
                        <input type="text" id="subject" name="subject" required placeholder="Asunto del mensaje" />
                    </div>

                    <div class="form-group">
                        <label for="message">Mensaje</label>
                        <textarea id="message" name="message" required placeholder="Escribe tu mensaje aquí..."></textarea>
                    </div>

                    <button type="submit">Enviar mensaje</button>
                </form>
            </div>

            <div class="contact-methods">
                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <h3>Teléfono</h3>
                    <p>+1 (123) 456-7890</p>
                </div>

                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h3>Email</h3>
                    <p>info@tuempresa.com</p>
                </div>

                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Dirección</h3>
                    <p>Calle Principal #123, Ciudad</p>
                </div>
            </div>
            <script src="no.js"></script>
        </main>
    );
    document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById("contactForm");

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Validación básica
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !subject || !message) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Por favor, ingresa un correo electrónico válido.");
                return;
            }

            // Simulación de envío
            alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
            contactForm.reset();
        });
    });
}

export default Contacto;
