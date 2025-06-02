import { useEffect, useState } from "react";
import  './ConsultasForm.css';

function ConsultasForm ({onSubmit, initialCon}) {
    
    // Estados para cada campo del formulario
    const [fechaConsulta, setFechaConsulta] = useState('');
    const [horaConsulta, setHoraConsulta] = useState('');
    const [tipoConsulta, setTipoConsulta] = useState('');
    const [propietarioID, setPropietarioID] = useState('');

    const [propietarios, setPropietarios] = useState([]);
    const [hestado, setHEstado] = useState('');
    // useEffect se ejecuta cuando cambian los props (en este caso, initialPac)
    // Si initialPac existe, llenamos el formulario con sus valores (modo edición)
    useEffect(() => {
        fetch('http://localhost:8080/api/propietarios')
        .then((response) => response.json())
        .then((data) =>{
            const propietariosData = Array.isArray(data) ? data : data.content;
            setPropietarios(propietariosData || []);
        })
        .catch((error) => console.error('Error fetching propietarios:', error));
        
        if (initialCon) {
        setFechaConsulta(initialCon.fechaConsulta);
        const [hora, estado] = initialCon.horaConsulta.split(' ');
        setHoraConsulta(hora || '');
        setHEstado(estado || 'AM');
        setTipoConsulta(initialCon.tipoConsulta);
        setPropietarioID(initialCon.propietarioID?.propietarioID || '');
    }
    },[initialCon]);

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const conData = {
            fechaConsulta, horaConsulta: `${horaConsulta} ${hestado}`, 
            tipoConsulta,
            propietarioID : {
                propietarioID: Number(propietarioID)
            }
        }
        onSubmit(conData);
        setFechaConsulta('');
        setHoraConsulta('');
        setHEstado('AM');
        setTipoConsulta('');
        setPropietarioID('');
    };

    return (
        <form onSubmit={handleSubmit} className="consultas-form">
            {/* Campos controlados de las consultas */} 
            <div className="consultas-form-group">
                <label className="consultas-label"> Fecha </label>
                <input className="consultas-input" type="date" placeholder="Fecha de la consulta" value={fechaConsulta} onChange={(e) => setFechaConsulta(e.target.value)} required/>
            </div>
            <div className="consultas-form-group">
                <label className="consultas-label"> Hora </label>
                <input className="consultas-input" type="time" value={horaConsulta} onChange={(e) => setHoraConsulta(e.target.value)} required/>
                <br />
                <select className="consultas-select" value={hestado} onChange={(e) => setHEstado(e.target.value)} required>
                    <option className="consultas-select-option" value=""> Seleccionar </option>
                    <option className="consultas-select-option" value="AM"> AM </option>
                    <option className="consultas-select-option" value="PM"> PM </option>
                </select>
            </div>
            <div className="consultas-form-group">
                <label className="consultas-label"> Tipo </label>
                <input className="consultas-input" type="text" placeholder="Tipo de consulta" value={tipoConsulta} onChange={(e) => setTipoConsulta(e.target.value)} required/>
            </div>
            <div className="consultas-form-group">
                <label className="consultas-label"> Propietarios </label>
                <select className="consultas-select" value={propietarioID} onChange={(e) => setPropietarioID(Number(e.target.value))} required>
                    <option className="consultas-select-option"> Seleccionar un propietario </option>
                    {propietarios.map((propietario) => (
                        <option className="consultas-select-option" key={propietario.propietarioID} value={propietario.propietarioID}>
                            {propietario.nombrePropietario} - C.C {propietario.cedulaPropietario}
                        </option>
                    ))}
                </select>
            </div>
            {/* Botón de envío que cambia su texto dependiendo si estamos en modo edición o creación */}
            <div className="consultas-form-group">
                <button className="consultas-button"> {initialCon ? 'Actualizar' : 'Agregar'} </button>
            </div>
        </form>
    );
};

export default ConsultasForm;