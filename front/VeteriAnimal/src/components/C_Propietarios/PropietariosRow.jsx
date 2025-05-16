
const PropietariosRow = ({propietario, onEdit, onDelete}) =>{

    // Función para manejar el evento de editar
    const handleEdit = () => {
        console.log("Editando propietario", propietario);
        // Llama a la función onEdit pasando el propietario completo
        onEdit(propietario);
    };

    // Función para manejar el evento de eliminar
    const handleDelete = () => {
        console.log("Eliminando propietario", propietario);
        // Llama a la función onDelete pasando solo el ID del propietario
        onDelete(propietario.propietarioID);
    };

     // Renderizamos la fila del producto como una fila de tabla (<tr>)
     return (
        <tr>
            {/* Mostramos cada propiedad del producto en una celda (<td>) */}
            <td>{propietario.cedulaPropietario}</td>
            <td>{propietario.nombrePropietario}</td>
            <td>{propietario.apellidoPropietario}</td>
            <td>{propietario.telefonoPropietario}</td>
            <td>{propietario.correoPropietario}</td>
            <td>{propietario.direccionPropietario}</td>
            {/* Celda de acciones con botones para editar y eliminar */}
            <td>
                <div className="propietarios-actions-row">
                    <button className="propietarios-button-edit" onClick={handleEdit}> Editar </button>
                    <button className="propietarios-button-delete" onClick={handleDelete}> Eliminar </button>
                </div>
            </td>
        </tr>
     );
    
};

export default PropietariosRow;