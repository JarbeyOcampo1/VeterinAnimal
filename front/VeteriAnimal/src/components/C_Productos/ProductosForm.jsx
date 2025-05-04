import { useState, useEffect } from "react";

function ProductosForm ({onSubmit, initialRest}) {

    // Estados para los campos del formulario
    const [nombreProducto, setNombreProducto] = useState('');
    const [tipoProducto, setTipoProducto] = useState('');
    const [descripcionProducto, setDescripcionProducto] = useState('');
    const [marcaProducto, setMarcaProducto] = useState('');
    const [precioProducto, setPrecioProducto] = useState('');
    const [cantidadProducto, setCantidadProducto] = useState('');

    // Función para manejar el envío del formulario
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

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        const resData = {nombreProducto, tipoProducto, descripcionProducto, marcaProducto, precioProducto, cantidadProducto};
        onSubmit(resData);
        setNombreProducto('');
        setTipoProducto('');
        setDescripcionProducto('');
        setMarcaProducto('');
        setPrecioProducto('');
        setCantidadProducto('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label> Nombre </label>
                <input type="text"  placeholder="Nombre del producto" value={nombreProducto} onChange={(e) => setNombreProducto(e.target.value)} required/>
            </div>
            <div>
                <label> Tipo </label>
                <input type="text" placeholder="Tipo de producto" value={tipoProducto} onChange={(e) => setTipoProducto(e.target.value)} required/>
            </div>
            <div>
                <label> Marca </label>
                <input type="text" placeholder="Marcar del producto" value={marcaProducto} onChange={(e) => setMarcaProducto(e.target.value)} required/>
            </div>
            <div>
                <label> Descripcion </label>
                <input type="text" placeholder="Descripcion del producto " value={descripcionProducto} onChange={(e) => setDescripcionProducto(e.target.value)} required/>
            </div>
            <div>
                <label> Cantidad </label>
                <input type="number" placeholder="Cantidad de productos" value={cantidadProducto} onChange={(e) => setCantidadProducto(e.target.value)} required/>
            </div>
            <div>
                <label> Precio </label>
                <input type="number" placeholder="Precio del producto" value={precioProducto} onChange={(e) => setPrecioProducto(e.target.value)} required/>
            </div>
            <div>
                <button type="submit" > {initialRest ? 'Actualizar' : 'Agregar'} </button>
            </div>
        </form>
    );
}

export default ProductosForm;