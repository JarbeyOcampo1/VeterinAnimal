import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo1 from "../image/Logo1.jpg";
import axios from "axios";
import CirugiasTable from "./CirugiasTable";
import CirugiasForm from "./CirugiasForm";
import './Cirugias.css'

function Cirugias () {

    // Inicializamos la función de navegación
    const navigate = useNavigate();

    // Verifica si el token de autenticación existe en el almacenamiento local
    useEffect(() => {
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

    // Crear un estado para almacenar los cirugia
    const [cirugia, setCirugia] = useState([]);
    const [editingCirugia, setEditingCirugia] = useState(null);

    // Actualiza la lista cada vez que se crea uno nuevo
    useEffect(() => {
        fetchCirugia();
    },[]);

    // Recorre la lista y retorna una respuesta
    const fetchCirugia = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/cirugias')
            setCirugia(response.data);
        } catch (error) {
          console.log('Error al cargar los datos', error);
        }
    };

    // Crear un cirguia o actualizar uno existente
    const CreateOrUpdateCirugia = async (cirugiaData) => {
        try {
            if (editingCirugia) {
                await axios.put(`http://localhost:8080/api/cirugias/${editingCirugia.cirugiaID}` , cirugiaData);
            }else {
                await axios.post(`http://localhost:8080/api/cirugias`, cirugiaData);
                await fetchCirugia();
            }
        } catch (error) {
            console.log('Error al crear un cirugia', error);
        }
    };

    //Editar cirugia
    const handleEditingCirugia = (cirugia) => {
        setEditingCirugia(cirugia);
    };

    // Eliminar peluqueria
    const handleDeleteCirugia = async (cirugiaID) => {
        try {
            await axios.delete(`http://localhost:8080/api/cirugias/${cirugiaID}`);
            await fetchCirugia();
        } catch (error) {
            console.log('Error al eliminar el cirugia', error);
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
                            <Link to="/Consultas" className="menu-subitem"> Consultas </Link>
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
            <div className="cirugias-container-principal">
                <h1 className="cirugias-h1-title"> Cirugias </h1>
                <CirugiasTable cirugias={cirugia} onEdit={handleEditingCirugia} onDelete={handleDeleteCirugia}/>
                <br />
                <h2 className="cirugias-h2-edit-create">{editingCirugia ? 'Editar':'Crear'}</h2>
                <CirugiasForm onSubmit={CreateOrUpdateCirugia} initialCi={editingCirugia} />
            </div>
        </div>
    );
}

export default Cirugias;
