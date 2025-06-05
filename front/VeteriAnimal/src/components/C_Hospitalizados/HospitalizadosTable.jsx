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
                        <th className="hospitalizado-th"> Fecha_Ingreso </th>
                        <th className="hospitalizado-th"> Fecha_Salida </th>
                        <th className="hospitalizado-th"> Hora_Entrada </th>
                        <th className="hospitalizado-th"> Hora_Salida </th>
                        <th className="hospitalizado-th"> Estados_pacientes </th>
                        <th className="hospitalizado-th"> Tratamiento_pacientes </th>
                        <th className="hospitalizado-th"> Cuidados_pacientes </th>
                        <th className="hospitalizado-th"> Diagnostico_pacientes </th>
                        <th className="hospitalizado-th"> Precio </th>
                        <th className="hospitalizado-th"> Observacciones_pacientes </th>
                        <th className="hospitalizado-th"> Pacientes </th>
                        <th className="hospitalizado-th"> Propietarios </th>
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