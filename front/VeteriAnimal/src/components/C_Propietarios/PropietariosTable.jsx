import PropietariosRow from "./PropietariosRow";

function PropietariosTable ({propiestarios, onEdit, onDelete}) {
    return (
        <div className="propietarios-table-container">
            {/* Tabla */}
            <table className="propietarios-table-header">
                {/* Encabezado de la tabla con los nombres de las columnas */}
                <thead className="propietarios-table-header">
                    <tr className="propietarios-table-row">
                        <th className="propietarios-th"> Cedula </th>
                        <th className="propietarios-th"> Nombre </th>
                        <th className="propietarios-th"> Apellido </th>
                        <th className="propietarios-th"> Telefono </th>
                        <th className="propietarios-th"> Email </th>
                        <th className="propietarios-th"> Direccion </th>
                        {/* Tabla donde van las filas de propietarios */}
                        <tbody className="propietarios-table-body">
                            {/* Si existen propietarios y hay al menos uno en el array */}

                        </tbody>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default PropietariosTable;