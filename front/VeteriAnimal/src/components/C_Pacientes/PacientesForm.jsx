import { useEffect, useState } from "react";
import { data } from "react-router-dom";

function PacientesForm ({onSubmit, initialPac}) {

    // estados para cada campo del formulario
    const [nombrePaciente, setNombrePaciente] = useState('');
    const [especiePaciente, setEspeciePaciente] = useState('');
    const [razaPaciente, setRazaPaciente] = useState('');
    const [sexoPaciente, setSexoPaciente] = useState('');
    const [edad, setEdad] = useState('');
    const [pesoPaciente, setPesoPaciente] = useState('');
    const [colorPaciente, setColorPaciente] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [historialClinico, setHistorialClinico] = useState('');
    const [propietarioID, setPropietarioID] = useState('');

    const [propietarios, setPropietarios] = useState([]);

     // useEffect se ejecuta cuando cambian los props (en este caso, initialPac)
    // Si initialPac existe, llenamos el formulario con sus valores (modo edición)
    useEffect(() => {

        fetch('http://localhost:8080/api/propietarios')
        .then((response) => response.json())
        .then((data) => {
            const propietariosData = Array.isArray(data) ? data : data.content;
            setPropietarios(propietariosData || []);;
        })
        .catch((error) => console.error('Error fetching propietarios:', error));

        if (initialPac) {
            setNombrePaciente(initialPac.nombrePaciente);
            setEspeciePaciente(initialPac.especiePaciente);
            setRazaPaciente(initialPac.razaPaciente);
            setSexoPaciente(initialPac.sexoPaciente);
            setEdad(initialPac.edad);
            setPesoPaciente(initialPac.pesoPaciente);
            setColorPaciente(initialPac.colorPaciente);
            setFechaNacimiento(initialPac.fechaNacimiento);
            setHistorialClinico(initialPac.historialClinico);
            setPropietarioID(initialPac.propietarioID?.propietarioID || '');
        };
    },[initialPac]);

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        const pacData = {
            nombrePaciente, especiePaciente, razaPaciente, sexoPaciente, edad, pesoPaciente, colorPaciente, fechaNacimiento, historialClinico,
            propietarioID : {
                propietarioID: Number(propietarioID)
            }
        };
        onSubmit(pacData);
        setNombrePaciente('');
        setEspeciePaciente('');
        setRazaPaciente('');
        setSexoPaciente('');
        setEdad('');
        setPesoPaciente('');
        setColorPaciente('');
        setFechaNacimiento('');
        setHistorialClinico('');
        setPropietarioID('');
    };
    
    return (
        <form onSubmit={handleSubmit} className="pacientes-form">
            {/* Campos controlados de los productos */}
            <div className="pacientes-form-group">
                <label className="pacientes-label"> Nombre </label>
                <input className="pacientes-input" type="text" placeholder="Nombre del paciente" value={nombrePaciente} onChange={(e) => setNombrePaciente(e.target.value)} required/>
            </div>
            <div className="pacientes-form-group">
                <label className="pacientes-label"> Especie </label>
                <input className="pacientes-input" type="text" placeholder="Especie del paciente" value={especiePaciente} onChange={(e) => setEspeciePaciente(e.target.value)} required/>
            </div>
            <div className="pacientes-form-group">
                <label className="pacientes-label">  Raza </label>
                <input className="pacientes-input" type="text" placeholder="Raza del paciente" value={razaPaciente} onChange={(e) => setRazaPaciente(e.target.value)} required/>
            </div>
            <div className="pacientes-form-group">
                <label className="pacientes-label"> Sexo </label>
                <select className="pacientes-select" value={sexoPaciente} onChange={(e) => setSexoPaciente(e.target.value)} required>
                    <option className="pacientes-select-option" value=""> Seleccionar </option>
                    <option className="pacientes-select-option" value="Macho"> Macho </option>
                    <option className="pacientes-select-option" value="Hembra"> Hembra </option>
                </select>
            </div>
            <div>
                <label> Edad </label>
                <input type="number" placeholder="Edad del paciente" value={edad} onChange={(e) => setEdad(e.target.value)} required/>
            </div>
            <div>
                <label> Peso </label>
                <input type="number" placeholder="Peso del paciente KG" value={pesoPaciente} onChange={(e) => setPesoPaciente(e.target.value)} required/>
            </div>
            <div>
                <label> Color </label>
                <input type="text" placeholder="Color del paciebte" value={colorPaciente} onChange={(e) => setColorPaciente(e.target.value)} required/>
            </div>
            <div>
                <label> Fecha de nacimiento </label>
                <input type="date" placeholder="Feacha de nacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required/>
            </div>
            <div>
                <label> Historial </label>
                <input type="text" placeholder="Historial del paciente" value={historialClinico} onChange={(e) => setHistorialClinico(e.target.value)} required/>
            </div>
            <div>
                <label> Propietarios </label>
                <select value={propietarioID} onChange={(e) => setPropietarioID(Number(e.target.value))} required>
                    <option value=""> Selecciona un propietario </option>
                    {propietarios.map((propietario) => (
                        <option key={propietario.propietarioID} value={propietario.propietarioID}>
                            {propietario.nombrePropietario} - C.C {propietario.cedulaPropietario}
                        </option>
                    ))}
                </select>
            </div>
            {/* Botón de envío que cambia su texto dependiendo si estamos en modo edición o creación */}
            <div>
                <button type="submit"> {initialPac ? 'Actualizar':'Agregar'} </button>
            </div>
        </form>
    );
}

export default PacientesForm;