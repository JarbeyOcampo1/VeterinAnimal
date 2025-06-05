import { useEffect, useState } from "react";
import './HospitalizadosForm.css';

function HospitalizadosForm({ onSubmit, initialHo }) {
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [fechaSalida, setFechaSalida] = useState('');
    const [horaEntrada, setHoraEntrada] = useState('');
    const [horaSalida, setHoraSalida] = useState('');
    const [estado, setEstado] = useState('');
    const [tratamiento, setTratamiento] = useState('');
    const [cuidadoEspecial, setCuidadoEspecial] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [costo, setCosto] = useState('');
    const [observaciones, setObservaciones] = useState('');
    const [propietarioID, setPropietarioID] = useState('');
    const [pacienteID, setPacienteID] = useState('');

    const [propietarios, setPropietarios] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [hestado1, setHEstado1] = useState('AM');
    const [hestado2, setHEstado2] = useState('AM');

    useEffect(() => {
        // Fetch Propietarios
        fetch('http://localhost:8080/api/propietarios')
            .then((response) => response.json())
            .then((data) => {
                const propietariosData = Array.isArray(data) ? data : data.content;
                setPropietarios(propietariosData || []);
            })
            .catch((error) => console.log('Error fetching propietarios:', error));

        // Fetch Pacientes
        fetch('http://localhost:8080/api/pacientes')
            .then((response) => response.json())
            .then((data) => {
                const pacientesData = Array.isArray(data) ? data : data.content;
                setPacientes(pacientesData || []);
            })
            .catch((error) => console.log('Error fetching pacientes:', error));

        if (initialHo) {
            setFechaIngreso(initialHo.fechaIngreso);
            setFechaSalida(initialHo.fechaSalida);
            const [hora1, estado1] = initialHo.horaEntrada.split(' ');
            const [hora2, estado2] = initialHo.horaSalida.split(' ');
            setHoraEntrada(hora1 || '');
            setHEstado1(estado1 || 'AM');
            setHoraSalida(hora2 || '');
            setHEstado2(estado2 || 'AM');
            setEstado(initialHo.estado);
            setTratamiento(initialHo.tratamiento);
            setCuidadoEspecial(initialHo.cuidadoEspecial);
            setDiagnostico(initialHo.diagnostico);
            setCosto(initialHo.costo);
            setObservaciones(initialHo.observaciones);
            setPropietarioID(initialHo.propietario?.propietarioID || '');
            setPacienteID(initialHo.paciente?.pacienteID || '');

        }
    }, [initialHo]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const hoData = {
        fechaIngreso,
        fechaSalida,
        horaEntrada: `${horaEntrada} ${hestado1}`,
        horaSalida: `${horaSalida} ${hestado2}`,
        estado,
        tratamiento,
        cuidadoEspecial,
        diagnostico,
        costo,
        observaciones,
        propietario: {
            propietarioID: Number(propietarioID),
        },
        paciente: {
            pacienteID: Number(pacienteID),
        },
    };


        onSubmit(hoData);

        // Limpiar el formulario
        setFechaIngreso('');
        setFechaSalida('');
        setHoraEntrada('');
        setHoraSalida('');
        setEstado('');
        setHEstado1('AM');
        setHEstado2('AM');
        setTratamiento('');
        setCuidadoEspecial('');
        setDiagnostico('');
        setCosto('');
        setObservaciones('');
        setPropietarioID('');
        setPacienteID('');
    };

    return (
        <form onSubmit={handleSubmit} className="hospitalizados-form">
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Fecha Ingreso</label>
                <input className="hospitalizados-input" type="date" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} required />
            </div>
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Fecha Salida</label>
                <input className="hospitalizados-input" type="date" value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)} required />
            </div>
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Hora Entrada</label>
                <input className="hospitalizados-input" type="time" value={horaEntrada} onChange={(e) => setHoraEntrada(e.target.value)} required />
                <br />
                <select className="hospitalizados-select" value={hestado1} onChange={(e) => setHEstado1(e.target.value)} required>
                    <option value="">Seleccionar</option>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Hora Salida</label>
                <input className="hospitalizados-input" type="time" value={horaSalida} onChange={(e) => setHoraSalida(e.target.value)} required />
                <br />
                <select className="hospitalizados-select" value={hestado2} onChange={(e) => setHEstado2(e.target.value)} required>
                    <option value="">Seleccionar</option>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Estado</label>
                <input className="hospitalizados-input" type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} required />
            </div>
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Tratamiento</label>
                <input className="hospitalizados-input" type="text" placeholder="Tratamiento" value={tratamiento} onChange={(e) => setTratamiento(e.target.value)} required />
            </div>
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Cuidados</label>
                <input className="hospitalizados-input" type="text" placeholder="Cuidados" value={cuidadoEspecial} onChange={(e) => setCuidadoEspecial(e.target.value)} required />
            </div>
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Diagnóstico</label>
                <input className="hospitalizados-input" type="text" placeholder="Diagnóstico" value={diagnostico} onChange={(e) => setDiagnostico(e.target.value)} required />
            </div>
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Precio</label>
                <input className="hospitalizados-input" type="number" value={costo} onChange={(e) => setCosto(e.target.value)} required />
            </div>
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Observaciones</label>
                <input className="hospitalizados-input" type="text" value={observaciones} onChange={(e) => setObservaciones(e.target.value)} required />
            </div>
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Pacientes</label>
                <select className="hospitalizados-select" value={pacienteID} onChange={(e) => setPacienteID(e.target.value)} required>
                    <option value="">Seleccionar un paciente</option>
                    {pacientes.map((paciente) => (
                        <option className="hospitalizados-select-option" key={paciente.pacienteID} value={paciente.pacienteID}>
                            {paciente.nombrePaciente} - Especie {paciente.especiePaciente}
                        </option>
                    ))}
                </select>
            </div>
            <div className="hospitalizados-form-group">
                <label className="hospitalizados-label">Propietarios</label>
                <select className="hospitalizados-select" value={propietarioID} onChange={(e) => setPropietarioID(e.target.value)} required>
                    <option value="">Seleccionar un propietario</option>
                    {propietarios.map((propietario) => (
                        <option className="hospitalizados-select-option" key={propietario.propietarioID} value={propietario.propietarioID}>
                            {propietario.nombrePropietario} - C.C {propietario.cedulaPropietario}
                        </option>
                    ))}
                </select>
            </div>
            <div className="hospitalizados-form-group">
                <button className="hospitalizados-button">{initialHo ? 'Actualizar' : 'Agregar'}</button>
            </div>
        </form>
    );
}

export default HospitalizadosForm;
