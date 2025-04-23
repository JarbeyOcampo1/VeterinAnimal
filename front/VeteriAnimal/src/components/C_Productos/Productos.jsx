import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo1 from "../image/Logo1.jpg";

function Productos () {

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

    return(
        <div>
            <div className="Container_Principal">
                <div className="logo-container">
                    <img src={Logo1} alt="Logo principal" className="principal-logo-image" />
                </div>
                {/* Barra de navegación con el botón de salir */}
                <nav className="navbar">
                    <Link to="/Principal"> Principal </Link>
                    <button onClick={handleLogout} className="logout-button">Salir</button>
                </nav>
            </div>


        </div>
    );
}

export default Productos;