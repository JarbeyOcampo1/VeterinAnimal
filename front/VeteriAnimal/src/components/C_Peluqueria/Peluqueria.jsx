import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo1 from "../image/Logo1.jpg";
import axios from "axios";
import PeluqueriaTable from "./PeluqueriaTable";
import PeluqueriaForm from "./PeluqueriaForm";
import './Peluqueria.css';

function Peluqieria () {

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
    const [peluqueria, setPeluqueria] = useState([]);
    const [editingPeluqueria, setEditingPeluqueria] = useState(null);

    // Actualiza la lista cada vez que se crea uno nuevo
    useEffect(() => {
        fetchPeluqueria();
    },[]);

    // Recorre la lista y retorna una respuesta
    const fetchPeluqueria = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/peluquerias');
            setPeluqueria(response.data);
        } catch (error) {
            console.log('Error al cargar los datos', error);
        }
    };

    // Crear un peluqueria o actualizar uno existente
    const CreateOrUpdatePeluqueria = async (peluqueriaData) => {
        try {
            if (editingPeluqueria) {
                await axios.put(`http://localhost:8080/api/peluquerias/${editingPeluqueria.peluqueriaID}` , peluqueriaData);
            }else {
                await axios.post(`http://localhost:8080/api/peluquerias`, peluqueriaData);
                await fetchPeluqueria();
            }
        } catch (error) {
            console.log('Error al crear un peluqueria', error);
        }
    };

    //Editar peluqueria
    const hadleEditingPeluqueria = (peluqueria) => {
        setEditingPeluqueria(peluqueria);
    };

    // Eliminar peluqueria
    const handleDeletePeluqueria = async (peluqueriaID) => {
        try {
            await axios.delete(`http://localhost:8080/api/peluquerias/${peluqueriaID}`);
            await fetchPeluqueria();
        } catch (error) {
            console.log('Error al eliminar el peluqueria', error);
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
                            <Link to="/Consultas" className="menu-subitem"> Consultas </Link>
                            <Link to="/Hospitalizados" className="menu-subitem"> Hospitalizados </Link>
                            <Link to="/Propietarios" className="menu-subitem"> Propietarios </Link>
                            <Link to="/Pacientes" className="menu-subitem"> Pacientes </Link>
                        </div>
                    </div>
                    <Link to="/Principal"> Principal </Link>
                    <Link to="/Productos"> Productos </Link>
                    <button onClick={handleLogout} className="logout-button">Salir</button>
                </nav>
            </div>
            <div className="peluqueria-container-principal">
                <h1 className="peluqueria-h1-title"> Peluqueria </h1>
                <PeluqueriaTable peluquerias={peluqueria} onEdit={hadleEditingPeluqueria} onDelete={handleDeletePeluqueria}/>
                <br />
                <h2 className="peluqueria-h2-edit-create">{editingPeluqueria ? 'Editar':'Crear'}</h2>
                <PeluqueriaForm onSubmit={CreateOrUpdatePeluqueria} initialPe={editingPeluqueria} />
            </div>
        </div>
    );
}

export default Peluqieria;