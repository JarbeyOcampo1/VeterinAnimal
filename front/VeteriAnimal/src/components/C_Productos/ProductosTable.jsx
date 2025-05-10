import ProductosRow from "./ProductosRow";
import "./ProductosTable.css";

function ProductosTable ({productos, onEdit, onDelete}) {
    return (
        <div>
            {/* Tabla */}
            <table className="productos-table">
                 {/* Encabezado de la tabla con los nombres de las columnas */}
                <thead>
                    <tr>
                        <th> Nombre </th>
                        <th> Tipo </th>
                        <th> Marca </th>
                        <th> Descripción </th>
                        <th> Cantidad </th>
                        <th> Precio </th>
                    </tr>
                </thead>
                {/* Tabla donde van las filas de productos */}
                <tbody>
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