import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo1 from "./components/image/Logo1.jpg";
import imagen4 from './components/image/imagen4.jpg'
import imagen2 from './components/image/imagen2.jpg'
import imagen3 from './components/image/imagen3.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './Principal.css'

function Principal () {

    // Inicializamos la función de navegación
    const navigate = useNavigate() 
    
    // Verifica si el token de autenticación existe en el almacenamiento local
    useEffect ( () => {
        const auntenticar = localStorage.getItem("Exito");
        if (!auntenticar) {
            navigate("/");
        }
    },[navigate]);

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem("Exito");
        navigate("/");
    };

    return (
        <div>
          <div className="Container_Principal">
            <div className="logo-container">
            <img src={Logo1} alt="Logo principal" className="principal-logo-image" />
            </div>
             {/* Barra de navegación con el botón de salir */}
            <nav className="navbar">
              <button onClick={handleLogout} className="logout-button">Salir</button>
            </nav>
          </div>
          {/* Contenedor del título con animación */}
          <div className="title-container">
          <h1 className="title"> <span>V</span><span>E</span><span>T</span><span>E</span><span>R</span><span>I</span>
          <span>A</span><span>N</span><span>I</span><span>M</span><span>A</span><span>L</span></h1>
          </div>
           {/* Carrusel de imágenes (simulado con scroll horizontal) */}
          <div className="carrousel">
            <div><img src={imagen4}  alt="imagen1"/></div>
            <div><img src={imagen2} alt="imagen2"/></div>
            <div><img src={imagen3} alt="imagen3"/></div>
            <div><img src={imagen4}  alt="imagen1"/></div>
            <div><img src={imagen2} alt="imagen2"/></div>
            <div><img src={imagen3} alt="imagen3"/></div>
            <div><img src={imagen4}  alt="imagen1"/></div>
            <div><img src={imagen2} alt="imagen2"/></div>
            <div><img src={imagen3} alt="imagen3"/></div>
            <div><img src={imagen4}  alt="imagen1"/></div>
            <div><img src={imagen2} alt="imagen2"/></div>
            <div><img src={imagen3} alt="imagen3"/></div>
          </div>
           {/* Pie de página con enlaces a redes sociales */}
          <footer className="footer">
            <h2>Síguenos en nuestras redes sociales:</h2>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </footer>
        </div>
      );
}

export default Principal;