import { useEffect, useState } from "react";
import './PeluqueriaForm.css';

function PeluqueriaForm ({onSubmit, initialPe}) {

    // Estados para cada campo del formulario
    const [fechaPeluqueria, setFechaPeluqueria] = useState('');
    const [horaPeluqueria, setHoraPeluqueria] = useState('');
    const [tipoPeluqueria, setTipoPeluqueria] = useState('');
    const [estadoPeluqueria, setEstadoPeluqueria] = useState('AM');
    const [precioPeluqueria, setPrecioPeluqueria] = useState('');
    const [propietarioID, setPropietarioID] = useState('');
    const [pacienteID, setPacienteID] = useState('');

    const [propietarios, setPropietarios] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [hestado, setHEstado] = useState('');

    // useEffect se ejecuta cuando cambian los props (en este caso, initialPe)
    // Si initialPe existe, llenamos el formulario con sus valores (modo edición)
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

        if (initialPe) {
            setFechaPeluqueria(initialPe.fechaPeluqueria);
            const [hora, estado] = initialPe.horaPeluqueria.split(' ');
            setHoraPeluqueria(hora || '');
            setHEstado(estado || 'AM');
            setTipoPeluqueria(initialPe.tipoPeluqueria);
            setEstadoPeluqueria(initialPe.estadoPeluqueria);
            setPrecioPeluqueria(initialPe.precioPeluqueria);
            setPropietarioID(initialPe.propietarioID?.propietarioID || '');
            setPacienteID(initialPe.pacienteID?.pacienteID || '');
        }
    },[initialPe]);

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        const peData = {
            fechaPeluqueria, horaPeluqueria: `${horaPeluqueria} ${hestado}`, tipoPeluqueria, estadoPeluqueria, precioPeluqueria,
            propietarioID: {
                propietarioID: Number(propietarioID)
            },
            pacienteID: {
                pacienteID: Number(pacienteID)
            }

        }
        onSubmit(peData);
        setFechaPeluqueria('');
        setHoraPeluqueria('');
        setHEstado('AM');
        setTipoPeluqueria('');
        setEstadoPeluqueria('');
        setPrecioPeluqueria('');
        setPropietarioID('');
        setPacienteID('');
    };

    return (
        <form onSubmit={handleSubmit} className="peluqueria-form">
            {/* Campos controlados de las consultas */}
            <div className="peluqueria-form-group">
                <label className="peluqueria-label"> Fecha </label>
                <input className="peluqueria-input" type="date" value={fechaPeluqueria} onChange={(e) => setFechaPeluqueria(e.target.value)} required/>
            </div>
            <div className="peluqueria-form-group">
                <label className="peluqueria-lable"> Hora </label>
                <input className="peluqueria-input" type="time" value={horaPeluqueria} onChange={(e) => setHoraPeluqueria(e.target.value)} required/>
                <br />
                <select className="peluqueria-select" value={hestado} onChange={(e) => setHEstado(e.target.value)} required>
                    <option className="peluqueria-select-option" value=""> Seleccionar </option>
                    <option className="peluqueria-select-option" value="AM "> AM </option>
                    <option className="peluqueria-select-option" value="PM"> PM </option>
                </select>
            </div>
            <div className="peluqueria-form-group">
                <label className="peluqueria-label"> Tipo </label>
                <input className="peluqueria-input" type="text" value={tipoPeluqueria} onChange={(e) => setTipoPeluqueria(e.target.value)} required/>
            </div>
            <div className="peluqueria-form-group">
                <label className="peluqueria-label"> Estado </label>
                <select className="peluqueria-select" value={estadoPeluqueria} onChange={(e) => setEstadoPeluqueria(e.target.value)} required>
                    <option  className="peluqueria-select-option" value=""> Seleccionar </option>
                    <option  className="peluqueria-select-option" value="Reservado"> Reservado </option>
                    <option  className="peluqueria-select-option" value="Cancelado"> Cancelado </option>
                </select>
            </div>
            <div className="peluqueria-form-group">
                <label className="peluqueria-label"> Precio </label>
                <input className="peluqueria-input" type="number" value={precioPeluqueria} onChange={(e) => setPrecioPeluqueria(e.target.value)} required/>
            </div>
            <div className="peluqueria-form-group">
                <label className="peluqueria-label"> Pacientes </label>
                <select className="peluqueria-select" value={pacienteID} onChange={(e) => setPacienteID(Number(e.target.value))} required>
                    <option className="peluqueria-select-option" value=""> Seleccionar un paciente </option>
                    {pacientes.map((paciente) => (
                        <option className="peluqueria-select-option" key={paciente.pacienteID} value={paciente.pacienteID}>
                            {paciente.nombrePaciente} - Especie{paciente.especiePaciente}
                        </option>
                    ))}
                </select>
            </div>
            <div className="peluqueria-form-group">
                <label className="peluqueria-label"> Propietarios </label>
                <select  className="peluqueria-select" value={propietarioID} onChange={(e) => setPropietarioID(Number(e.target.value))}>
                    <option className="peluqueria-select" value=""> Seleccionar un propietario </option>
                    {propietarios.map((propietario) => (
                        <option className="peluqueria-select-option" key={propietario.propietarioID} value={propietario.propietarioID}>
                            {propietario.nombrePropietario} - C.C {propietario.cedulaPropietario}
                        </option>
                    ))}
                </select>
            </div>
            {/* Botón de envío que cambia su texto dependiendo si estamos en modo edición o creación */}
            <div className="peluqueria-form-group">
                    <button className="peluqueria-button">{initialPe ? 'Actualizar':'Agregar'}</button>
            </div>
        </form>
    );
}

export default PeluqueriaForm;