import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo1 from "../image/Logo1.jpg";
import axios from "axios";
import PropietariosTable from "./PropietariosTable";
import PropietariosForm from "./PropietariosForm";
import './Propietarios.css';
 
function Propietarios () {

    // Inicializamos la función de navegación
    const navigate = useNavigate();

    // Verifica si el token de autenticación existe en el almacenamiento local
    useEffect (() => {
        const auntenticar = localStorage.getItem("Exito");
        if (!auntenticar) {
            navigate("/");
        }
    },[navigate])

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem("Exito");
        navigate("/");
    };

    // Crear un estado para almacenar los propietarios
    const [propietario, setPropietarios] = useState([]);
    const [editingPropietario, setEditingPropietario] = useState(null);

    // Actualiza la lista de propietarios cada vez que se crea uno nuevo
    useEffect(() =>{
        fetchPropietario();
    },[]);

    // Recorre la lista de productos y retorna una respuesta
    const fetchPropietario = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/propietarios');
            setPropietarios(response.data);
        } catch (error) {
            console.log('Error al cargar los datos', error);
        }
    };

    // Crear un propietario
    const createOrUpdatePropietarios = async (propietarioData) => {
        try {
            if (editingPropietario) {
                await axios.put(`http://localhost:8080/api/propietarios/${editingPropietario.propietarioID}`, propietarioData);
            } else {
                await axios.post(`http://localhost:8080/api/propietarios`, propietarioData);
                await fetchPropietario();
            }
        } catch (error) {
            console.log('Error al crear un propietario', error);
        }
    };

    // Editar un propietario
    const handleEditPropietario = (propietario) => {
        setEditingPropietario(propietario);
    };

    // Eliminar un propietario
    const handleDeletePropietario = async (propietarioID) => {
        try {
            await axios.delete(`http://localhost:8080/api/propietarios/${propietarioID}`);
            fetchPropietario();
        } catch (error) {
            alert('Error al eliminar el propietario', error);
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
                            <Link to="/Pacientes" className="menu-subitem"> Pacientes </Link>
                        </div>
                    </div>
                    <Link to="/Principal"> Principal </Link>
                    <Link to="/Peluqueria"> Peluqueria </Link>
                    <Link to="/Productos"> Productos </Link>
                    <button onClick={handleLogout} className="logout-button">Salir</button>
                </nav>
            </div>
            <div className="propietarios-container-principal">
                <h1 className="propietarios-h1-title"> Propietarios </h1>
                <PropietariosTable propietarios={propietario} onEdit={handleEditPropietario} onDelete={handleDeletePropietario}/>
                <br />
                <h2 className="propietarios-h2-edit-create">{editingPropietario ? 'Editar propietario':'Crear propietario'}</h2>
                <PropietariosForm onSubmit={createOrUpdatePropietarios} initialPro={editingPropietario}/>
            </div>
        </div>
    );
}

export default Propietarios;