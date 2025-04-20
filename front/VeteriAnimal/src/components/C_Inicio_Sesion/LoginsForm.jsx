import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LoginsForm.css';

function LoginsForm ({onSubmit, initialLogin}) {

    // Estados para almacenar los valores
    const [nombreLogin,setNombreLogin] = useState ("");
    const [password,setPassword] = useState ("");

    // useEffect para inicializar los campos si se reciben datos iniciales 
    useEffect (() => {
        try {
            if (initialLogin) {
                // Se cargan los datos iniciales en los estados
                setNombreLogin(initialLogin.nombreLogin);
                setPassword(initialLogin.password);
            }
        } catch (error) {
            console.log('Erro al cargar datos de inicio de sesión', error);
        }
    },[initialLogin]); // Se ejecuta cada vez que cambie initialLogin

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que se recargue la pagian
        const resData = {nombreLogin,password}; // Crea un objeto con los datos
        onSubmit(resData); //llama la funcion
        setNombreLogin("");
        setPassword("");
    };

    // Estructura del formulario
    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="logins-title">Crear un usuario</h1>
                <div className="form-group">
                    <label> Usuario: </label>
                    <input type="text" placeholder="Nombre del usuario" value={nombreLogin} onChange={(e) => setNombreLogin(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label> Contraseña: </label>
                    <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <button className="form-button" type="submit"> Registrar Usuario </button>
                </div>
                <Link className="register-link" to="/"> Volver </Link>
            </form>
        </div>
    );
}

export default LoginsForm;