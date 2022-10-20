import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Detalle from './pages/detalle';
import Estadisticas from './pages/estadisticas';
import Form from './pages/form';


function App() {
  return (
    <BrowserRouter>
      <Routes>                  
          <Route path='/' element={<Home />} />
          <Route path='/detalle/:id' element={<Detalle />} />
          <Route path='/estadisticas' element={<Estadisticas />} />
          <Route path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
