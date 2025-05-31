import { useEffect, useState } from "react";

function ConsultasForm ({onSubmit, initialCon}) {
    
    // Estados para cada campo del formulario
    const [fechaConsulta, setFeachaConsulta] = useState('');
    const [horaConsulta, setHoraConsulta] = useState('');
    const [tipoConsulta, setTipoConsulta] = useState('');
    const [propietarioID, setPropietarioID] = useState('');

    const [propietarios, setPropietarios] = useState([]);
    // useEffect se ejecuta cuando cambian los props (en este caso, initialPac)
    // Si initialPac existe, llenamos el formulario con sus valores (modo edición)
    useEffect(() => {
        fetch('http://localhost:8080/api/propietarios')
        .then((response) => response.json())
        .then((data) =>{
            const propietariosData = Array.isArray(data) ? data : data.content;
            setPropietarios(propietariosData || []);
        })
        .catch((error) => console.error('Error fetching propietarios:', error));
    },[initialCon]);

    return (
        <div>

        </div>
    );
};

export default ConsultasForm;