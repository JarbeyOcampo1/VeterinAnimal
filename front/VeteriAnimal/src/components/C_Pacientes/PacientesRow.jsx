const PacientesRow = ({paciente, onEdit, onDelete}) => {
    
    // Función para manejar el evento de editar
    const handleEdit = () => {
        console.log("Editando paciente", paciente);
        // Llama a la función onEdit pasando el paciente completo
        onEdit(paciente);
    };

    // Función para manejar el evento de eliminar
    const handleDelete = () => {
        console.log("Eliminando paciente", paciente);
        // Llama a la función onDelete pasando solo el ID del paciente
        onDelete(paciente.pacienteID);
    };

    // Renderizamos la fila del paciente como una fila de tabla (<tr>)
    return (
        <tr>
            {/* Mostramos cada propiedad del paciente en una celda (<td>) */}
            <td>{paciente.nombrePaciente}</td>
            <td>{paciente.especiePaciente}</td>
            <td>{paciente.razaPaciente}</td>
            <td>{paciente.sexoPaciente}</td>
            <td>{paciente.edad}</td>
            <td>{paciente.pesoPaciente}</td>
            <td>{paciente.colorPaciente}</td>
            <td>{new Date(paciente.fechaNacimiento).toLocaleDateString()}</td>
            <td>{paciente.historialClinico}</td>
            <td>{paciente.propietarioID?.nombrePropietario || 'N/A'}</td>
            <td>
                {/* Celda de acciones con botones para editar y eliminar */}
                <div>
                    <button onClick={handleEdit}> Editar </button>
                    <button onClick={handleDelete}> Eliminar </button>
                </div>
            </td>
        </tr>
    );
}   

export default PacientesRow;