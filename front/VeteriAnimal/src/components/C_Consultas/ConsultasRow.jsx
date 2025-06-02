import './ConsultasRow.css';

const ConsultasRow = ({consulta, onEdit, onDelete}) => {
    
    // Función para manejar el evento de editar
    const handleEdit = () => {
        console.log("Editando consulta", consulta);
        // Llama a la función onEdit pasando la consulta completa
        onEdit(consulta);
    };

    // Función para manejar el evento de eliminar
    const handleDelete = () => {
        console.log("Eliminando consulta",consulta);
        // Llama a la función onDelete pasando la consulta completa
        onDelete(consulta.consultaID);
    };

    // Renderizamos la fila de la consulta como una fila de tabla (<tr>)
    return (
        <tr>
            {/* Mostramos cada propiedad de la consulta en una celda (<td>) */}
            <td>{consulta.fechaConsulta}</td>
            <td>{consulta.horaConsulta}</td>
            <td>{consulta.tipoConsulta}</td>
            <td>{consulta.propietarioID?.nombrePropietario || 'N/A'}</td>
            <td>
                {/* Celda de acciones con botones para editar y eliminar */}
                <div className="consultas-actions-row">
                    <button className="consultas-button-edit" onClick={handleEdit}> Editar </button>
                    <button className="consultas-button-delete" onClick={handleDelete}> Eliminar </button>
                </div>
            </td>
        </tr>
    );
};

export default ConsultasRow;