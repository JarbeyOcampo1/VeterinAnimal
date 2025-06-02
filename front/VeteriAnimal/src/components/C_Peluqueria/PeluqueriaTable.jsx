import PeluqueriaRow from './PeluqueriaRow';
import './PeluqueriaTable.css';

function PeluqueriaTable({peluquerias, onEdit, onDelete}) {
    return (
        <div className="peluqueria-table-container">
            {/* Tabla */}
            <table className="peluqueria-table">
                {/* Encabezado de la tabla con los nombres de las columnas */}
                <thead className="peluqueria-table-header">
                    <tr className="peluqueria-table-row">
                        <th className="peluqueria-th"> Fecha </th>
                        <th className="peluqueria-th"> Hora </th>
                        <th className="peluqueria-th"> Tipo </th>
                        <th className="peluqueria-th"> Estado </th>
                        <th className="peluqueria-th"> Precio </th>
                        <th className="peluqueria-th"> Propietarios </th>
                        <th className="peluqueria-th"> Pacientes </th>
                        <th className="peluqueria-th"> Acciones </th>
                    </tr>
                </thead>
                {/* Tabla donde van las filas de peluquerías */}
                <tbody className="peluqueria-table-body">
                    {/* Si existen peluquerías y hay al menos una en el array */}
                    {peluquerias && peluquerias.length > 0 ? (
                        peluquerias.map((peluqueria) => (
                            <PeluqueriaRow key={peluqueria.peluqueriaID} peluqueria={peluqueria} onEdit={onEdit} onDelete={onDelete}/>
                        )) 
                        ): (
                            <tr>
                                <td colSpan={7}> No hay peluquerías disponibles </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );

};

export default PeluqueriaTable;