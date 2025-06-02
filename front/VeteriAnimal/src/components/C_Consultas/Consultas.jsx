import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo1 from "../image/Logo1.jpg";
import { useState } from "react";
import axios from "axios";
import ConsultasTable from "./ConsultasTable";
import ConsultasForm from "./ConsultasForm";
import './Consultas.css';

function Consultas () {
    
    // Inicializamos la función de navegación
    const navigate = useNavigate();

    // Verifica si el token de autenticación existe en el almacenamiento local
    useEffect (() =>{
        const autenticar = localStorage.getItem("Exito");

        if (!autenticar) {
            navigate("/");
        }

    },[navigate]);

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem("Exito");
        navigate("/");
    };

    // Crear un estado para almacenar las consultas
    const [consulta, setConsulta] = useState([]);
    const [editingConsulta, setEditingConsulta] = useState(null);

    // Actualiza la lista de consultas cada vez que se crea una nueva
    useEffect(() => {
        fetchConsulta();
    },[]);

    // Recorre la lista de consultas y retorna una respuesta
    const fetchConsulta = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/consultas');
            setConsulta(response.data);
        } catch (error) {
            console.log('Error al cargar los datos', error);
        }
    };

    // Crear una consulta o actualizar una existente
    const CreateOrUpdateConsultas = async (consultaData) => {
        try {
            if (editingConsulta) {
                await axios.put(`http://localhost:8080/api/consultas/${editingConsulta.consultaID}`, consultaData);
            }else {
                await axios.post(`http://localhost:8080/api/consultas`, consultaData);
                await fetchConsulta();
            }
        } catch (error) {
            console.log('Error al crear una consulta', error);
        }
    };

    // Editar una consulta
    const handleEditConsulta = (consulta) => {
        setEditingConsulta(consulta);
    };

    // Eliminar una consulta
    const handleDeleteConsulta = async (consultaID) => {
        try {
            await axios.delete(`http://localhost:8080/api/consultas/${consultaID}`);
            await fetchConsulta();
        } catch (error) {
            console.log('Error al eliminar la consulta', error);
        }
    };

    return (
        <div>
            <div className="Container_Principal">
                <div className="logo-container">
                    <img src={Logo1} alt="Logo principal" className="principal-logo-image"/>
                </div>
                {/* Barra de navegación con el botón de salir */}
                <nav className="navbar">
                    <div className="menu-service">
                        <span className="menu-service-span"> Servicios </span>
                        <div className="menu-service-content">
                            <Link to="/Cirugias" className="menu-subitem"> Cirugias </Link>
                            <Link to="/Hospitalizados" className="menu-subitem"> Hospitalizados </Link>
                            <Link to="/Propietarios" className="menu-subitem"> Propietarios </Link>
                            <Link to="/Pacientes" className="menu-subitem"> Pacientes </Link>
                        </div>
                    </div>
                    <Link to="/Principal"> Principal </Link>
                    <Link to="/Peluqueria"> Peluqueria </Link>
                    <Link to="/Productos"> Productos </Link>
                    <button onClick={handleLogout} className="logout-button"> Salir </button>
                </nav>
            </div>
            <div className="consultas-container-principal">
                <h1 className="consultas-h1-title"> Consultas </h1>
                <ConsultasTable consultas={consulta} onEdit={handleEditConsulta} onDelete={handleDeleteConsulta}/>
                <br />
                <h2 className="consultas-h2-edit-create">{editingConsulta? 'Editar Consulta' : 'Crear consulta'}</h2>
                <ConsultasForm onSubmit={CreateOrUpdateConsultas} initialCon={editingConsulta}/>
            </div>
        </div>
    );
}

export default Consultas;