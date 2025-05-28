import ProductosRow from "./ProductosRow";
import "./ProductosTable.css";
  
function ProductosTable ({productos, onEdit, onDelete}) {
    return (
        <div className="productos-table-container">
            {/* Tabla */}
            <table className="productos-table">
                 {/* Encabezado de la tabla con los nombres de las columnas */}
                <thead className="productos-table-header">
                    <tr className="productos-table-row">
                        <th className="productos-th"> Nombre </th>
                        <th className="productos-th"> Tipo </th>
                        <th className="productos-th"> Marca </th>
                        <th className="productos-th"> Descripción </th>
                        <th className="productos-th"> Cantidad </th>
                        <th className="productos-th"> Precio </th>
                        <th className="productos-th"> Acciones </th>
                    </tr>
                </thead>
                {/* Tabla donde van las filas de productos */}
                <tbody className="productos-table-body">
                    {/* Si existen productos y hay al menos uno en el array */}
                    { productos && productos.length > 0 ? (
                        productos.map((producto) => (
                            <ProductosRow key={producto.productoID} producto={producto} onEdit={onEdit} onDelete={onDelete}/>
                        ))
                        ): (
                            <tr>
                                <td colSpan={6}> No hay productos disponibles </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
}

export default ProductosTable;