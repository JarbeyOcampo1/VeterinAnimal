import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo1 from "../image/Logo1.jpg";

function Hospitalizados () {

    // Inicializamos la función de navegación
    const navigate= useNavigate();

    // Verifica si el token de autenticación existe en el almacenamiento local
    useEffect (() =>{
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
                    <div className="menu-service">
                        <span className="menu-service-span"> Servicios </span>
                        <div className="menu-service-content">
                            <Link to="/Cirugias" className="menu-subitem"> Cirugias </Link>
                            <Link to="/Consultas" className="menu-subitem"> Consultas </Link>
                            <Link to="/Propietarios" className="menu-subitem"> Propietarios </Link>
                            <Link to="/Pacientes" className="menu-subitem"> Pacientes </Link>
                        </div>
                    </div>
                    <Link to="/Principal"> Principal </Link>
                    <Link to="/Peluqueria"> Peluqueria </Link>
                    <Link to="/Productos"> Productos </Link>
                    <button onClick={handleLogout} className="logout-button">Salir</button>
                </nav>
            </div>


        </div>
    );
}

export default Hospitalizados;