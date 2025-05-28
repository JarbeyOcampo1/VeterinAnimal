import PacientesRow from './PacientesRow';

function PacientesTable ({pacientes, onEdit, onDelete}) {
    return (
        <div>
            {/* Tabla */}
            <table>
                {/* Encabezado de la tabla con los nombres de las columnas */}
                <thead>
                    <tr>
                        <th> Nombre </th>
                        <th> Especie </th>
                        <th> Raza </th>
                        <th> Sexo </th>
                        <th> Edad </th>
                        <th> Peso </th>
                        <th> Color </th>
                        <th> Fecha de nacimiento </th>
                        <th> Historial clínico </th>
                        <th> Propietario </th>
                        <th> Acciones </th>
                    </tr>
                </thead>
                {/* Tabla donde van las filas de pacientes */}
                <tbody>
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