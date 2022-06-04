import { useState, useEffect } from "react";
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import Footer from './components/Footer'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const listado = localStorage.getItem('pacientes');
    if (listado) {
      setPacientes(JSON.parse(listado));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]); // Se ejecuta cuando el valor de pacientes cambia

  const eliminarPaciente = id => {
    setPacientes(pacientes.filter(paciente => paciente.id !== id));
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header
      />
      <div className='mt-12 md:flex'>
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes   
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
        <div className="container mx-auto mt-20">
          <Footer />
        </div>
    </div>
  )
}

export default App
