import './HospitalizadosRow.css'

const HospitalizadosRow = ({hospitalizado, onEdit, onDelete}) => {

    // Función para manejar el evento de editar
    const handleEdit = () => {
        console.log("Editando Hospitalizado", hospitalizado);
        // Llama a la función onEdit pasando el objeto completo de peluquería
        onEdit(hospitalizado);
    };

    const handleDelete = () => {
        console.log("Eliminando Hospitalizado", hospitalizado);
        // Llama a la función onDelete pasando solo el ID de la peluquería
        onDelete(hospitalizado.hospitalizadoID);
    };

    // Renderizamos la fila del hospitalizado como una fila de tabla (<tr>)
    return (
        <tr>
            {/* Mostramos cada propiedad de la hospitalizado en una celda (<td>) */}
            <td>{hospitalizado.fechaIngreso}</td>
            <td>{hospitalizado.fechaSalida}</td>
            <td>{hospitalizado.horaEntrada}</td>
            <td>{hospitalizado.horaSalida}</td>
            <td>{hospitalizado.estado}</td>
            <td>{hospitalizado.tratamiento}</td>
            <td>{hospitalizado.cuidadoEspecial}</td>
            <td>{hospitalizado.diagnostico}</td>
            <td>{hospitalizado.costo}</td>
            <td>{hospitalizado.observaciones}</td>
            <td>{hospitalizado.propietario?.nombrePropietario || 'N/A'}</td>
            <td>{hospitalizado.paciente?.nombrePaciente || 'N/A'}</td>
            <td>
                {/* Celda de acciones con botones para editar y eliminar */}
                <div className="hospitalizado-actions-row">
                    <button className="hospitalizado-button-edit" onClick={handleEdit}> Editar </button>
                    <button className="hospitalizado-button-delete" onClick={handleDelete}> Eliminar </button>
                </div>
            </td>
        </tr>
    );
};

export default HospitalizadosRow;