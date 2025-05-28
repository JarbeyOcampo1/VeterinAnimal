import PacientesRow from './PacientesRow';
import './PacientesTable.css';

function PacientesTable ({pacientes, onEdit, onDelete}) {
    return (
        <div className='pacientes-table-container'>
            {/* Tabla */}
            <table className='pacientes-table'>
                {/* Encabezado de la tabla con los nombres de las columnas */}
                <thead className='pacientes-table-header'>
                    <tr className='pacientes-table-row'>
                        <th className='pacientes-th'> Nombre </th>
                        <th className='pacientes-th'> Especie </th>
                        <th className='pacientes-th'> Raza </th>
                        <th className='pacientes-th'> Sexo </th>
                        <th className='pacientes-th'> Edad </th>
                        <th className='pacientes-th'> Peso </th>
                        <th className='pacientes-th'> Color </th>
                        <th className='pacientes-th'> Fecha de nacimiento </th>
                        <th className='pacientes-th'> Historial clínico </th>
                        <th className='pacientes-th'> Propietario </th>
                        <th className='pacientes-th'> Acciones </th>
                    </tr>
                </thead>
                {/* Tabla donde van las filas de pacientes */}
                <tbody className='pacientes-table-body'>
                    {/* Si existen pacientes y hay al menos uno en el array */}
                    { pacientes && pacientes.length > 0 ? (
                        pacientes.map((paciente) => (
                            <PacientesRow key={paciente.pacienteID} paciente={paciente} onEdit={onEdit} onDelete={onDelete}/>
                        ))
                        ): (
                            <tr>
                                <td colSpan={11}> No hay pacientes disponibles </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default PacientesTable;