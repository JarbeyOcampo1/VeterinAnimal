import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo1 from "../image/Logo1.jpg";
import axios from "axios";
import HospitalizadosTable from "./HospitalizadosTable";
import HospitalizadosForm from "./HospitalizadosForm";
import './Hospitalizados.css'

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

    // Crear un estado para almacenar los hospitalizado
    const [hospitalizado, setHospitalizado] = useState([]);
    const [editingHospitalizado, setEditingHospitalizado] = useState(null);
    
    // Actualiza la lista cada vez que se crea uno nuevo
    useEffect(() => {
        fetchHospitalizado();
    },[]);
        
    // Recorre la lista y retorna una respuesta
    const fetchHospitalizado = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/hospitalizados');
        setHospitalizado(response.data);
        } catch (error) {
            console.log('Error al cargar los datos', error);
        }
    };

    // Crear un hospitalizado o actualizar uno existente
    const CreateOrUpdateHospitalizado = async (hospitalizadoData) => {
        try {
            if (editingHospitalizado) {
                await axios.put(`http://localhost:8080/api/hospitalizados/${editingHospitalizado.hospitalizadoID}` , hospitalizadoData);
            }else {
                await axios.post(`http://localhost:8080/api/hospitalizados`, hospitalizadoData);
                await fetchHospitalizado();
            }
        } catch (error) {
            console.log('Error al crear un hospitalizado', error);
        }
    };

    //Editar peluqueria
    const hadleEditingHospitalizado = (hospitalizado) => {
        setEditingHospitalizado(hospitalizado);
    };

    // Eliminar Hospitalizado
    const handleDeleteHospitalizado = async (hospitalizadoID) => {
        try {
            await axios.delete(`http://localhost:8080/api/hospitalizados/${hospitalizadoID}`);
            await fetchHospitalizado();
        } catch (error) {
            console.log('Error al eliminar a un hospitalizado', error);
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
            <div className="hospitalizado-container-principal">
                <h1 className="hospitalizado-h1-title"> Hospitalizado </h1>
                <HospitalizadosTable hospitalizados={hospitalizado} onEdit={hadleEditingHospitalizado} onDelete={handleDeleteHospitalizado}/>
                <br />
                <h2 className="hospitalizado-h2-edit-create">{editingHospitalizado ? 'Editar':'Crear'}</h2>
                <HospitalizadosForm onSubmit={CreateOrUpdateHospitalizado} initialHo={editingHospitalizado} />
            </div>
        </div>
    );
}

export default Hospitalizados;