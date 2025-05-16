import { useState, useEffect } from "react";

function PropietariosForm({ onSubmit, initialPro}) {

     // estados para cada campo del formulario
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [apellidoPropietario, setApellidoPropietario] = useState('');
    const [cedulaPropietario, setCedulaPropietario] = useState('');
    const [telefonoPropietario, setTelefonoPropietario] = useState('');
    const [correoPropietario, setCorreoPropietario] = useState('');
    const [direccionPropietario, setDireccionPropietario] = useState('');

    // useEffect se ejecuta cuando cambian los props (en este caso, initialPro)
    // Si initialPro existe, llenamos el formulario con sus valores (modo edición)
    useEffect (() => {
        if (initialPro) {
            setNombrePropietario(initialPro.nombrePropietario);
            setApellidoPropietario(initialPro.apellidoPropietario);
            setCedulaPropietario(initialPro.cedulaPropietario);
            setTelefonoPropietario(initialPro.telefonoPropietario);
            setCorreoPropietario(initialPro.correoPropietario);
            setDireccionPropietario(initialPro.direccionPropietario);
        }
    },[initialPro])

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = (event) => {
        // Evitamos que el formulario recargue la página
        event.preventDefault();
        // Creamos un objeto con todos los datos del formulario
        const proData = {nombrePropietario, apellidoPropietario, cedulaPropietario, telefonoPropietario, correoPropietario, direccionPropietario}
        // Llamamos a la función que recibimos por props pasando los datos del producto
        onSubmit(proData);
        setNombrePropietario('');
        setApellidoPropietario('');
        setCedulaPropietario('');
        setTelefonoPropietario('');
        setCorreoPropietario('');
        setDireccionPropietario('');
    };

    return (
        <form onSubmit={handleSubmit} className="propietarios-form">
            {/* Campos controlados de los productos */}
            <div className="propietarios-form-group">
                <label className="propietarios-label"> Cedula </label>
                <input className="propietarios-input" type="number" placeholder="Cedula Ciudadania" value={cedulaPropietario} onChange={(e) => setCedulaPropietario(e.target.value)} required/>
            </div>
            <div className="proietarios-form-group">
                <label className="propietarios-label"> Nombre </label>
                <input className="propietarios-input" type="text" placeholder="Nombre propietario" value={nombrePropietario} onChange={(e) => setNombrePropietario(e.target.value)} required/>
            </div>
            <div className="propietarios-form-group">
                <label className="propietarios-label"> Apellido </label>
                <input  className="propietarios-input" type="text" placeholder="Apellido propietario" value={apellidoPropietario} onChange={(e) => setApellidoPropietario(e.target.value)} required/>
            </div>
            <div className="productos-form-group">
                <label className="propietarios-label"> Telefono </label>
                <input className="propietarios-input" type="number" placeholder="Telefono" value={telefonoPropietario} onChange={(e) => setTelefonoPropietario(e.target.value)} required/>
            </div>
            <div className="productos-form-group">
                <label className="propietarios-label"> Email </label>
                <input className="propietarios-input" type="email" placeholder="Email" value={correoPropietario} onChange={(e) => setCorreoPropietario(e.target.value)} required/>
            </div>
            <div className="productos-form-group">
                <label className="propietarios-label"> Direccion </label>
                <input className="propietarios-input" type="text" placeholder="Direccion" value={direccionPropietario} onChange={(e) => setDireccionPropietario(e.target.value)} required/>
            </div>
            {/* Botón de envío que cambia su texto dependiendo si estamos en modo edición o creación */}
            <div>
                <button className="propietarios-button" type="submit"> {initialPro ? 'Actualizar' : 'Agregar'} </button>
            </div>
        </form>
    );
}

export default PropietariosForm;