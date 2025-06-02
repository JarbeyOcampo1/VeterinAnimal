import './PeluqueriaRow.css';

const PeluqueriaRow = ({peluqueria, onEdit, onDelete}) => {
    
    // Función para manejar el evento de editar
    const handleEdit = () => {
        console.log("Editando peluquería", peluqueria);
        // Llama a la función onEdit pasando el objeto completo de peluquería
        onEdit(peluqueria);
    };

    const handleDelete = () => {
        console.log("Eliminando peluquería", peluqueria);
        // Llama a la función onDelete pasando solo el ID de la peluquería
        onDelete(peluqueria.peluqueriaID);
    };

    // Renderizamos la fila del paciente como una fila de tabla (<tr>)
    return (
        <tr>
            {/* Mostramos cada propiedad de la peluquería en una celda (<td>) */}
            <td>{peluqueria.fechaPeluqueria}</td>
            <td>{peluqueria.horaPeluqueria}</td>
            <td>{peluqueria.tipoPeluqueria}</td>
            <td>{peluqueria.estadoPeluqueria}</td>
            <td>{peluqueria.precioPeluqueria}</td>
            <td>{peluqueria.propietario?.nombrePropietario || 'N/A'}</td>
            <td>{peluqueria.paciente?.nombrePaciente || 'N/A'}</td>
            <td>
                {/* Celda de acciones con botones para editar y eliminar */}
                <div className="peluqueria-actions-row">
                    <button className="peluqueria-button-edit" onClick={handleEdit}> Editar </button>
                    <button className="peluqueria-button-delete" onClick={handleDelete}> Eliminar </button>
                </div>
            </td>
        </tr>
    );
};

export default PeluqueriaRow;