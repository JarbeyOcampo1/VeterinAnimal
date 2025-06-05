import { useEffect, useState } from "react";
import './CirugiasForm.css'

function CirugiasForm ({onSubmit, initialCi}) {

    // Estados para cada campo del formulario
    const [fechaCirugia, setFechaCirugia] = useState('');
    const [horaCirugia, setHoraCirugia] = useState('');
    const [tipoCirugia, setTipoCirugia] = useState('');
    const [estadoCirugia, setEstadoCirugia] = useState('');
    const [observaciones, setObservaciones] = useState('');
    const [complicaciones, setComplicaciones] = useState('');
    const [costoCirugia, setCostoCirugia] = useState('');
    const [propietarioID, setPropietarioID] = useState('');
    const [pacienteID, setPacienteID] = useState('');

    const [propietarios, setPropietarios] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [hestado, setHEstado] = useState('');

    // useEffect se ejecuta cuando cambian los props (en este caso, initialCi)
    // Si initialCi existe, llenamos el formulario con sus valores (modo edición)
    useEffect(() => {
        // Fetch propietarios
        fetch('http://localhost:8080/api/propietarios')
        .then((response) => response.json())
        .then((data) => {
            const propietariosData = Array.isArray(data) ? data : data.content;
            setPropietarios(propietariosData || []);
        })
        .catch((error) => console.error('Error fetching propietarios:', error));

        // Fetch pacientes
        fetch('http://localhost:8080/api/pacientes')
        .then((response) => response.json())
        .then((data) => {
            const pacientesData = Array.isArray(data) ? data : data.content;
            setPacientes(pacientesData || []);
        })
        .catch((error) => console.error('Error fetching pacientes:', error));

        if (initialCi) {
            setFechaCirugia(initialCi.fechaCirugia);
            const [hora, estado] = initialCi.horaCirugia.split(' ');
            setHoraCirugia(hora || '');
            setHEstado(estado || 'AM');
            setTipoCirugia(initialCi.tipoCirugia);
            setEstadoCirugia(initialCi.estadoCirugia);
            setObservaciones(initialCi.observaciones);
            setComplicaciones(initialCi.complicaciones);
            setCostoCirugia(initialCi.costoCirugia);
            setPropietarioID(initialCi.propietario?.propietarioID || '');
            setPacienteID(initialCi.paciente?.pacienteID || '');
        };
    },[initialCi]);

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        const ciData = {
            fechaCirugia, horaCirugia: `${horaCirugia} ${hestado}`, tipoCirugia, estadoCirugia, observaciones, complicaciones, costoCirugia,
            propietarioID: {
                propietarioID: Number(propietarioID)
            },
            pacienteID: {
                pacienteID: Number(pacienteID)
            }
        }
        onSubmit(ciData);
        setFechaCirugia('');
        setHoraCirugia('');
        setHEstado('AM');
        setTipoCirugia('');
        setEstadoCirugia('');
        setObservaciones('');
        setComplicaciones('');
        setCostoCirugia('');
        setPropietarioID('');
        setPacienteID('');
    };

    return (
        <form onSubmit={handleSubmit} className="cirugias-form">
            {/* Campos controlados de las consultas */}
            <div className="cirugias-form-group">
                <label className="cirugias-label"> Fecha Cirugia </label>
                <input className="cirugias-input" type="date" value={fechaCirugia} onChange={(e) => setFechaCirugia(e.target.value)} required/>
            </div>
            <div className="cirugias-form-group">
                <label className="cirugias-label"> Hora </label>
                <input className="cirugias-input" type="time" value={horaCirugia} onChange={(e) => setHoraCirugia(e.target.value)} required/>
                <br />
                <select className="cirugias-select" value={hestado} onChange={(e) => setHEstado(e.target.value)} required>
                    <option className="cirugias-select-option" value=""> Seleccionar </option>
                    <option className="cirugias-select-option" value="AM"> AM </option>
                    <option className="cirugias-select-option" value="PM"> PM </option>
                </select>
            </div>
            <div className="cirugias-form-group">
                <label className="cirugias-label"> Tipo Cirugia </label>
                <input className="cirugias-input" type="text" value={tipoCirugia} onChange={(e) => setTipoCirugia(e.target.value)} required/>
            </div>
            <div className="cirugias-form-group">
                <label className="cirugias-label"> Estado Cirugia </label>
                <select className="cirugias-select" value={estadoCirugia} onChange={(e) => setEstadoCirugia(e.target.value)} required>
                    <option  className="cirugias-select-option" value=""> Seleccionar </option>
                    <option  className="cirugias-select-option" value="Reservado"> Reservada </option>
                    <option  className="cirugias-select-option" value="Completada"> Completada </option>
                    <option  className="cirugias-select-option" value="Cancelado"> Cancelada </option>
                </select>
            </div>
            <div className="cirugias-form-group">
                <label className="cirugias-label"> Observaciones </label>
                <input className="cirugias-input" type="text" value={observaciones} onChange={(e) => setObservaciones(e.target.value)} required/>
            </div>
            <div className="cirugias-form-group">
                <label className="cirugias-label"> Complicaciones </label>
                <input className="cirugias-input" type="text" value={complicaciones} onChange={(e) => setComplicaciones(e.target.value)} required/>
            </div>
            <div className="cirugias-form-group">
                <label className="cirugias-label"> Precio </label>
                <input className="cirugias-input" type="number" value={costoCirugia} onChange={(e) => setCostoCirugia(e.target.value)} required/>
            </div>
            <div className="cirugias-form-group">
                <label className="cirugias-label"> Pacientes </label>
                <select className="cirugias-select" value={pacienteID} onChange={(e) => setPacienteID(e.target.value)} required>
                    <option className="cirugias-select-option" value=""> Seleccionar un paciente </option>
                    {pacientes.map((paciente) => (
                        <option className="cirugias-select-option" key={paciente.pacienteID} value={paciente.pacienteID}>
                            {paciente.nombrePaciente} - Especie{paciente.especiePaciente}
                        </option>
                    ))}
                </select>
            </div>
            <div className="cirugias-form-group">
                <label className="cirugias-label"> Propietarios </label>
                <select  className="cirugias-select" value={propietarioID} onChange={(e) => setPropietarioID(e.target.value)}>
                    <option className="cirugias-select" value=""> Seleccionar un propietario </option>
                    {propietarios.map((propietario) => (
                        <option className="cirugias-select-option" key={propietario.propietarioID} value={propietario.propietarioID}>
                            {propietario.nombrePropietario} - C.C {propietario.cedulaPropietario}
                        </option>
                    ))}
                </select>
            </div>
            {/* Botón de envío que cambia su texto dependiendo si estamos en modo edición o creación */}
            <div className="cirugias-form-group">
                    <button className="cirugias-button">{initialCi ? 'Actualizar':'Agregar'}</button>
            </div>
        </form>
    );

}

export default CirugiasForm;