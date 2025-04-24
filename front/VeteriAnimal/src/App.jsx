import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Logins from './components/C_Inicio_Sesion/Logins';
import Principal from './Principal';
import InicioSesionForm from './components/C_Inicio_Sesion/InicioSesionForm';
import Productos from './components/C_Productos/Productos';
import Peluqueria from './components/C_Peluqueria/Peluqueria';
import Pacientes from './components/C_Pacientes/Pacientes';
import Propietarios from './components/C_Propietarios/Propietarios';
import Hospitalizados from './components/C_Hospitalizados/Hospitalizados';
import Consultas from './components/C_Consultas/Consultas';
import Cirugias from './components/C_Cirugias/Cirugias';

function App() {

  return (
    // Configuración de las rutas de la aplicación
    // Se utiliza BrowserRouter para manejar el enrutamiento
    // Se definen las rutas y los componentes que se renderizarán para cada una
    <BrowserRouter>
        <Routes>
          <Route index element={<InicioSesionForm/>} />
          <Route path="/Logins" element={<Logins/>}/>
          <Route path='/Principal' element={<Principal/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/Peluqueria' element={<Peluqueria/>}/>
          <Route path='/Pacientes' element={<Pacientes/>}/>
          <Route path='/Propietarios' element={<Propietarios/>}/>
          <Route path='/Hospitalizados' element={<Hospitalizados/>}/>
          <Route path='/Consultas' element={<Consultas/>}/>
          <Route path='/Cirugias' element={<Cirugias/>}/> 
        </Routes>
    </BrowserRouter>
  );
}

export default App
