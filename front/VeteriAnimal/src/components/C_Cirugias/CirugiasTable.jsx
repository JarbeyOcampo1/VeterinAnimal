import CirugiasRow from './CirugiasRow';
import './CirugiasTable.css'

function CirugiasTable ({cirugias, onEdit, onDelete}) {
    return (
        <div className="cirugias-table-container">
            {/* Tabla */}
            <table className="cirugias-table">
                {/* Encabezado de la tabla con los nombres de las columnas */}
                <thead className="cirugias-table-header">
                    <tr className="cirugias-table-row">
                        <th className="cirugias-th"> Fecha_Cirugia </th>
                        <th className="cirugias-th"> Hora_Cirugia </th>
                        <th className="cirugias-th"> Tipo_Cirugia </th>
                        <th className="cirugias-th"> Estado </th>
                        <th className="cirugias-th"> Observaciones_Cirugia </th>
                        <th className="cirugias-th"> Complicaciones_Cirugia </th>
                        <th className="cirugias-th"> Precio </th>
                        <th className="cirugias-th"> Pacientes </th>
                        <th className="cirugias-th"> Propietarios </th>
                        <th className="cirugias-th"> Acciones </th>
                    </tr>
                </thead>
                {/* Tabla donde van las filas de peluquerías */}
                <tbody className="cirugias-table-body">
                    {/* Si existen peluquerías y hay al menos una en el array */}
                    {cirugias && cirugias.length > 0 ? (
                        cirugias.map((cirugia) => (
                            <CirugiasRow key={cirugia.cirugiaID} cirugia={cirugia} onEdit={onEdit} onDelete={onDelete}/>
                        )) 
                        ): (
                            <tr>
                                <td colSpan={10}> No hay cirugias disponibles </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default CirugiasTable;