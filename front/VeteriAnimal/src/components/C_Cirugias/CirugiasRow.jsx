import './CirugiasRow.css'

const CirugiasRow = ({cirugia, onEdit, onDelete}) => {

    // Función para manejar el evento de editar
    const handleEdit = () => {
        console.log("Editando Cirugia", cirugia);
        // Llama a la función onEdit pasando el objeto completo de cirugia
        onEdit(cirugia);
    };

    const handleDelete = () => {
        console.log("Eliminando cirugia", cirugia);
        // Llama a la función onDelete pasando solo el ID de la cirugia
        onDelete(cirugia.cirugiaID);
    };

    // Renderizamos la fila del cirugia como una fila de tabla (<tr>)
    return (
        <tr>
            {/* Mostramos cada propiedad de la cirugia en una celda (<td>) */}
            <td>{cirugia.fechaCirugia}</td>
            <td>{cirugia.horaCirugia}</td>
            <td>{cirugia.tipoCirugia}</td>
            <td>{cirugia.estadoCirugia}</td>
            <td>{cirugia.observaciones}</td>
            <td>{cirugia.complicaciones}</td>
            <td>{cirugia.costoCirugia}</td>
            <td>{cirugia.paciente?.nombrePaciente || 'N/A'}</td>
            <td>{cirugia.propietario?.nombrePropietario || 'N/A'}</td>
            <td>
                {/* Celda de acciones con botones para editar y eliminar */}
                <div className="cirugias-actions-row">
                    <button className="cirugias-button-edit" onClick={handleEdit}> Editar </button>
                    <button className="cirugias-button-delete" onClick={handleDelete}> Eliminar </button>
                </div>
            </td>
        </tr>
    );
};


export default CirugiasRow;

