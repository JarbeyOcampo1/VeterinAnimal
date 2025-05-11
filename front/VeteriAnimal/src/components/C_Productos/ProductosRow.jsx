import './ProductosRow.css';

const  ProductosRow = ({producto, onEdit, onDelete}) => {

    // Función para manejar el evento de editar
    const handleEdit = () => {
        console.log("Editando producto", producto);
        // Llama a la función onEdit pasando el producto completo
        onEdit(producto);
    };

     // Función para manejar el evento de eliminar
    const handleDelete = () => {
        console.log("Eliminando producto", producto);
        // Llama a la función onDelete pasando solo el ID del producto
        onDelete(producto.productoID);
    };

     // Renderizamos la fila del producto como una fila de tabla (<tr>)
    return (
        <tr>
            {/* Mostramos cada propiedad del producto en una celda (<td>) */}
            <td>{producto.nombreProducto}</td>
            <td>{producto.tipoProducto}</td>
            <td>{producto.marcaProducto}</td>
            <td>{producto.descripcionProducto}</td>
            <td>{producto.cantidadProducto}</td>
            <td>{producto.precioProducto}</td>
            <td>
                {/* Celda de acciones con botones para editar y eliminar */}
                <div className='productos-actions-row'>
                    <button className="productos-button-edit" onClick={handleEdit}> Editar </button>
                    <button className="productos-button-delete" onClick={handleDelete}> Eliminar </button>
                </div>
            </td>
        </tr>
    );
}

export default ProductosRow;