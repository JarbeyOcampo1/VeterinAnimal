import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Logins from './components/C_Inicio_Sesion/Logins';
import Principal from './Principal';
import InicioSesionForm from './components/C_Inicio_Sesion/InicioSesionForm';
import Productos from './components/C_Productos/Productos';
import Peluqueria from './components/C_Peluqueria/Peluqueria';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<InicioSesionForm/>} />
          <Route path="/Logins" element={<Logins/>}/>
          <Route path='/Principal' element={<Principal/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/Peluqueria' element={<Peluqueria/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App
