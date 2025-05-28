import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo1 from "../image/Logo1.jpg";
import axios from "axios";
import PacientesTable from "./PacientesTable";
import PacientesForm from "./PacientesForm";
import './Pacientes.css';

function Pacientes () {

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

    // Crear un estado para almacenar los pacientes
    const [paciente, setPaciente] = useState([]);
    const [editingPaciente, setEditingPaciente] = useState(null);

    // Actualiza la lista de pacientes cada vez que se crea uno nuevo
    useEffect(() => {
        fetchPaciente();
    },[]);

    // Recorre la lista de pacientes y retorna una respuesta
    const fetchPaciente = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/pacientes');
            setPaciente(response.data);
        } catch (error) {
            console.log('Error al cargar los datos', error);
        }
    };
    
    // Crear un paciente o actualizar uno existente
    const CreateOrUpdatePaciente = async (pacienteData) => {
        try {
            if (editingPaciente) {
                await axios.put(`http://localhost:8080/api/pacientes/${editingPaciente.pacienteID}`, pacienteData);
            }else {
                await axios.post(`http://localhost:8080/api/pacientes`, pacienteData);
                await fetchPaciente();
            }
        } catch (error) {
            console.log('Error al crear un paciente', error);
        }
    };

    // Editar un paciente
    const handleEditingPaciente = (paciente) => {
        setEditingPaciente(paciente);
    };

    // Eliminar un paciente
    const handleDeletePaciente = async (pacienteID) => {
        try {
            await axios.delete(`http://localhost:8080/api/pacientes/${pacienteID}`);
            await fetchPaciente();
        } catch (error) {
            alert('Error al eliminar el paciente');
        }
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
                            <Link to="/Hospitalizados" className="menu-subitem"> Hospitalizados </Link>
                            <Link to="/Propietarios" className="menu-subitem"> Propietarios </Link>
                        </div>
                    </div>
                    <Link to="/Principal"> Principal </Link>
                    <Link to="/Peluqueria"> Peluqueria </Link>
                    <Link to="/Productos"> Productos </Link>
                    <button onClick={handleLogout} className="logout-button">Salir</button>
                </nav>
            </div>
            <div className="pacientes-container-principal">
                <h1 className="pacientes-h1-title"> Pacientes </h1>
                <PacientesTable pacientes={paciente} onEdit={handleEditingPaciente} onDelete={handleDeletePaciente} />
                <br />
                <h2 className="pacientes-h2-edit-create">{editingPaciente ? 'Editar paciente':'Crear paciente'}</h2>
                <PacientesForm onSubmit={CreateOrUpdatePaciente} initialPac={editingPaciente}/>
            </div>
        </div>
    );
}

export default Pacientes;