import PropietariosRow from "./PropietariosRow";
import './PropietariosTable.css';

function PropietariosTable ({propietarios, onEdit, onDelete}) {
    return (
        <div className="propietarios-table-container">
            {/* Tabla */}
            <table className="propietarios-table">
                {/* Encabezado de la tabla con los nombres de las columnas */}
                <thead className="propietarios-table-header">
                    <tr className="propietarios-table-row">
                        <th className="propietarios-th"> Cedula </th>
                        <th className="propietarios-th"> Nombre </th>
                        <th className="propietarios-th"> Apellido </th>
                        <th className="propietarios-th"> Telefono </th>
                        <th className="propietarios-th"> Email </th>
                        <th className="propietarios-th"> Direccion </th>
                        <th className="propietarios-th"> Acciones </th>
                    </tr>
                </thead>
                {/* Tabla donde van las filas de propietarios */}
                <tbody className="propietarios-table-body">
                    {/* Si existen propietarios y hay al menos uno en el array */}
                    { propietarios && propietarios.length > 0 ? (
                        propietarios.map((propietario) =>(
                        <PropietariosRow key={propietario.propietarioID} propietario={propietario} onEdit={onEdit} onDelete={onDelete}/>
                    ))
                    ) : (
                        <tr>
                            <td colSpan={6}> No hay propietarios disponibles </td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default PropietariosTable;