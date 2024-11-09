import React, { useEffect } from 'react';
import './assets/style.css';

function App() {
  useEffect(() => {
    // Código del script.js
    const loginLink = document.getElementById('login-link');
    const loginSection = document.getElementById('login-section');
    const closeModal = document.getElementById('close-modal');

    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (loginSection.style.display === 'none' || loginSection.style.display === '') {
        loginSection.style.display = 'flex';
      }
    });

    closeModal.addEventListener('click', function() {
      loginSection.style.display = 'none';
    });

    // Limpieza de los event listeners cuando el componente se desmonta
    return () => {
      loginLink.removeEventListener('click', function() {});
      closeModal.removeEventListener('click', function() {});
    };
  }, []);

  return (
    <div className="App">
      {/* Resto del código HTML */}
      <header>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Instalaciones</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#" id="login-link">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <div className="modal" id="login-section" style={{ display: 'none' }}>
        <div className="login-container">
          <h2>Iniciar Sesión</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Usuario:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="btn">Iniciar Sesión</button>
            <button type="button" className="btn" id="close-modal">Cerrar</button>
          </form>
        </div>
      </div>

      <section className="hero">
        <div className="hero-text">
          <h1>TuCancha</h1>
          <p>
            Bienvenido a TuCancha, tu plataforma exclusiva para reservas deportivas.
            Aquí, podrás encontrar y reservar fácilmente las instalaciones deportivas
            más cercanas y adecuadas a tus necesidades. Con una interfaz amigable y accesible,
            TuCancha te permite elegir entre una variedad de deportes, horarios y ubicaciones,
            asegurando que encuentres el lugar perfecto para tu actividad.
          </p>
          <a href="#" className="btn">Leer Más</a>
        </div>
        <div className="hero-image">
          <img src="player.png" alt="Deporte" />
        </div>
      </section>
    </div>
  );
}

export default App;