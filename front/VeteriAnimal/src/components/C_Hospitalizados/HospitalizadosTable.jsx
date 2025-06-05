import HospitalizadosRow from './HospitalizadosRow';
import './HospitalizadosTable.css'

function HospitalizadosTable ({hospitalizados, onEdit, onDelete}) {
    return (
        <div className="hospitalizado-table-container">
            {/* Tabla */}
            <table className="hospitalizado-table">
                {/* Encabezado de la tabla con los nombres de las columnas */}
                <thead className="hospitalizado-table-header">
                    <tr className="hospitalizado-table-row">
                        <th className="hospitalizado-th"> F.Ingreso </th>
                        <th className="hospitalizado-th"> F.Salida </th>
                        <th className="hospitalizado-th"> H.Entrada </th>
                        <th className="hospitalizado-th"> H.Salida </th>
                        <th className="hospitalizado-th"> Estado </th>
                        <th className="hospitalizado-th"> Tratamiento </th>
                        <th className="hospitalizado-th"> Cuidados </th>
                        <th className="hospitalizado-th"> Diagnostico </th>
                        <th className="hospitalizado-th"> Precio </th>
                        <th className="hospitalizado-th"> Observacciones </th>
                        <th className="hospitalizado-th"> Propietarios </th>
                        <th className="hospitalizado-th"> Pacientes </th>
                        <th className="hospitalizado-th"> Acciones </th>
                    </tr>
                </thead>
                {/* Tabla donde van las filas de peluquerías */}
                <tbody className="hospitalizado-table-body">
                    {/* Si existen peluquerías y hay al menos una en el array */}
                    {hospitalizados && hospitalizados.length > 0 ? (
                        hospitalizados.map((hospitalizado) => (
                            <HospitalizadosRow key={hospitalizado.hospitalizadoID} hospitalizado={hospitalizado} onEdit={onEdit} onDelete={onDelete}/>
                        )) 
                        ): (
                            <tr>
                                <td colSpan={10}> No hay hospitalizados disponibles </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default HospitalizadosTable;