import { useState, useEffect } from "react";
import './ProductosForm.css';

function ProductosForm ({onSubmit, initialRest}) {

    // estados para cada campo del formulario
    const [nombreProducto, setNombreProducto] = useState('');
    const [tipoProducto, setTipoProducto] = useState('');
    const [descripcionProducto, setDescripcionProducto] = useState('');
    const [marcaProducto, setMarcaProducto] = useState('');
    const [precioProducto, setPrecioProducto] = useState('');
    const [cantidadProducto, setCantidadProducto] = useState('');

    // useEffect se ejecuta cuando cambian los props (en este caso, initialRest)
    // Si initialRest existe, llenamos el formulario con sus valores (modo edición)
    useEffect (() => {

        if (initialRest) {
            setNombreProducto(initialRest.nombreProducto);
            setTipoProducto(initialRest.tipoProducto);
            setDescripcionProducto(initialRest.descripcionProducto);
            setMarcaProducto(initialRest.marcaProducto);
            setPrecioProducto(initialRest.precioProducto);
            setCantidadProducto(initialRest.cantidadProducto);
        }
    },[initialRest])

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = (event) => {
        // Evitamos que el formulario recargue la página
        event.preventDefault();
        // Creamos un objeto con todos los datos del formulario
        const resData = {nombreProducto, tipoProducto, descripcionProducto, marcaProducto, precioProducto, cantidadProducto};
        // Llamamos a la función que recibimos por props pasando los datos del producto
        onSubmit(resData);
        setNombreProducto('');
        setTipoProducto('');
        setDescripcionProducto('');
        setMarcaProducto('');
        setPrecioProducto('');
        setCantidadProducto('');
    }

    // Retornamos el JSX del formulario
    return (
        <form onSubmit={handleSubmit} className="productos-form">
            {/* Campos controlados de los productos */}
            <div className="productos-form-group">
                <label className="productos-label"> Nombre </label>
                <input className="productos-input" type="text"  placeholder="Nombre del producto" value={nombreProducto} onChange={(e) => setNombreProducto(e.target.value)} required/>
            </div>
            <div className="productos-form-group">
                <label className="productos-label"> Tipo </label>
                <input className="productos-input" type="text" placeholder="Tipo de producto" value={tipoProducto} onChange={(e) => setTipoProducto(e.target.value)} required/>
            </div>
            <div className="productos-form-group">
                <label className="productos-label"> Marca </label>
                <input className="productos-input" type="text" placeholder="Marcar del producto" value={marcaProducto} onChange={(e) => setMarcaProducto(e.target.value)} required/>
            </div>
            <div className="productos-form-group">
                <label className="productos-label"> Descripcion </label>
                <input className="productos-input" type="text" placeholder="Descripcion del producto " value={descripcionProducto} onChange={(e) => setDescripcionProducto(e.target.value)} required/>
            </div>
            <div className="productos-form-group">
                <label className="productos-label"> Cantidad </label>
                <input className="productos-input" type="number" placeholder="Cantidad de productos" value={cantidadProducto} onChange={(e) => setCantidadProducto(e.target.value)} required/>
            </div>
            <div className="productos-form-group">
                <label className="productos-label"> Precio </label>
                <input className="productos-input" type="number" placeholder="Precio del producto" value={precioProducto} onChange={(e) => setPrecioProducto(e.target.value)} required/>
            </div>
             {/* Botón de envío que cambia su texto dependiendo si estamos en modo edición o creación */}
            <div className="productos-form-group">
                <button  className="productos-button" type="submit" > {initialRest ? 'Actualizar' : 'Agregar'} </button>
            </div>
        </form>
    );
}

export default ProductosForm;