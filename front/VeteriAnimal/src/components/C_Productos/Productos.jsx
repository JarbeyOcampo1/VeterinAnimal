import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo1 from "../image/Logo1.jpg";
import axios from "axios";
import ProductosForm from "./ProductosForm";
import ProductosTable from "./ProductosTable";
import './Productos.css';

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

    // Crear un estado para almacenar los productos
    const  [producto, setProducto] = useState([]);
    const [editingProducto, setEditingProducto] = useState(null);

    // Actualiza la lista de productos cada vez que se crea uno nuevo
    useEffect(() => {
        fetchProducto();
    },[]);

    // Recorre la lista de productos y retorna una respuesta
    const fetchProducto = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/productos');
            setProducto(response.data);
        } catch (error) {
            console.log('Error al cargar los datos', error);
            
        }
    };

    // Crear un producto
    const createOrUpdateProducto = async (productoData) => {
        try {
            if (editingProducto) {
                await axios.put(`http://localhost:8080/api/productos/${editingProducto.productoID}`,productoData);
            }else {
                await axios.post(`http://localhost:8080/api/productos`, productoData);
                await fetchProducto();
            }
        } catch (error) {
            console.log('Error al crear un producto', error);
        }
        fetchProducto();
        setEditingProducto(null);
    };

    // Editar un producto
    const handleEditProducto = (producto) => {
        setEditingProducto(producto);
    }

    // Eliminar un producto
    const handleDeleteProducto = async (productoID) => {
        try {
            await axios.delete(`http://localhost:8080/api/productos/${productoID}`);
            fetchProducto();
        } catch (error) {
            alert('Error al eliminar el producto', error);
        }
    }


    return(
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
                            <Link to="/Pacientes" className="menu-subitem"> Pacientes </Link>
                        </div>
                    </div>
                    <Link to="/Peluqueria"> Peluqueria </Link>
                    <Link to="/Principal"> Principal </Link>
                    <button onClick={handleLogout} className="logout-button">Salir</button>
                </nav>
            </div>
            <div className="productos-container-principal">
                <h1 className="productos-h1-title"> Productos </h1>
                <ProductosTable productos={producto} onEdit={handleEditProducto} onDelete={handleDeleteProducto} />
                <br />
                <h2 className="productos-h2-edit-create">{editingProducto ? 'Editar Producto':'Crear un producto'}</h2>
                <ProductosForm onSubmit={createOrUpdateProducto} initialRest={editingProducto}/>
            </div>
        </div>
    );
}

export default Productos;