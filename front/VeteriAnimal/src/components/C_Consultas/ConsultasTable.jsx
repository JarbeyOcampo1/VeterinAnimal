import ConsultasRow from "./ConsultasRow";
import './ConsultasTable.css';

function ConsultasTable ({consultas, onEdit, onDelete}) {
    return (
        <div className="consultas-table-container">
            {/* Tabla */}
            <table className="consultas-table">
                {/* Encabezado de la tabla con los nombres de las columnas */}
                <thead className="consultas-table-header">
                    <tr className="consultas-table-row">
                        <th className="consultas-th"> Fecha </th>
                        <th className="consultas-th"> Hora </th>
                        <th className="consultas-th"> Tipo consulta </th>
                        <th className="consultas-th"> Propietario </th>
                        <th className="consultas-th"> Acciones </th>
                    </tr>
                </thead>
                {/* Tabla donde van las filas de consultas */}
                <tbody className="consultas-table-body">
                    {/* Si existen consultas y hay al menos uno en el array */}
                    {consultas && consultas.length > 0 ? (
                        consultas.map((consulta) =>(
                        <ConsultasRow key={consulta.consultaID} consulta={consulta} onEdit={onEdit} onDelete={onDelete} />
                    ))
                    ) : (
                        <tr>
                            <td colSpan={4}> No hay consultas disponibles </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
};

export default ConsultasTable;