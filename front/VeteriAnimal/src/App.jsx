import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Logins from './components/C_Inicio_Sesion/Logins';
import Principal from './Principal';
import InicioSesionForm from './components/C_Inicio_Sesion/InicioSesionForm';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<InicioSesionForm/>} />
          <Route path="/Logins" element={<Logins/>}/>
          <Route path='/Principal' element={<Principal/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App
