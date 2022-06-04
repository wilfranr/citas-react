import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState(""); //nombre del usuario
  const [propietario, setPropietario] = useState("");   //nombre del propietario
  const [email, setEmail] = useState(""); //email del usuario
  const [fecha, setFecha] = useState(""); //fecha de alta del usuario
  const [sintomas, setSintomas] = useState("");  //sintomas del usuario
  const [error, setError] = useState(false); // para mostrar el error en caso de que no se haya llenado el campo

  useEffect(() => { //para que se ejecute una sola vez
    if (Object.keys(paciente).length > 0) { //si el objeto paciente tiene alguna propiedad
    setNombre(paciente.nombre);
    setPropietario(paciente.propietario);
    setEmail(paciente.email);
    setFecha(paciente.fecha);
    setSintomas(paciente.sintomas);
  }
}, [paciente]);

  const generarId = () => { //genera un id unico para cada paciente
    const random = Math.random().toString(36).substr(2); //genera un numero aleatorio
    const fecha = Date.now().toString(36) //genera una fecha aleatoria
    return(`${random}${fecha}`) //devuelve el id
  }

  const handleSubmit = (e) => {  // e = evento
    e.preventDefault(); // evita que se recargue la pagina
    if ( 
      nombre === "" ||  // si el nombre esta vacio
      propietario === "" || // si el propietario esta vacio
      email === "" || // si el email esta vacio
      fecha === "" || // si la fecha esta vacio
      sintomas === "" // si los sintomas estan vacios
    ) {
      setError(true); // Si alguno de los campos está vacío, se activa el error
      return; // Y se detiene la ejecución del código
    }
    setError(false);  // Si no hay error, se limpia el error
    const objetoPaciente = { // se crea un objeto con los datos del paciente
      nombre,  
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) { // si el paciente tiene un id, se actualiza
      objetoPaciente.id = paciente.id; // se agrega el id al objeto
      setPacientes( // se actualiza el array de pacientes
        pacientes.map(paciente => paciente.id === objetoPaciente.id ? objetoPaciente : paciente) // se busca el paciente con el id y se reemplaza por el nuevo objeto
      
      );
      setPacientes(pacientesActualizados); // se actualiza el array de pacientes
      setPaciente({}); // se limpia el objeto paciente

    } else { // si no, se agrega
      objetoPaciente.id = generarId(); // se agrega el id al objeto
      setPacientes([...pacientes, objetoPaciente]); // se agrega el objeto al array de pacientes
    }

    setPacientes([...pacientes, objetoPaciente]); // se agrega el paciente al array de pacientes

    // se limpian los campos
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }
  return (
    <div className="md:w-1/2 lg:w-2/5"> 
        <h1 className="font-black text-3xl text-center ">
          Pacientes
        </h1>
        <p className="text-lg mt-5 text-center mb-10">
          Agregar Pacientes y {' '}
          <span className="text-indigo-600 font-bold ">Administrarlos</span>
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          {error && <Error><p>Todos los campos son obligatorios</p></Error>} 
          <div>
            <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota </label>
            <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la Mascota" value={nombre} onChange={ (e) => setNombre(e.target.value) }/>
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
            <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la propietario" value={propietario} onChange={ (e) => setPropietario(e.target.value) }/>
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
            <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email de contacto" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">alta</label>
            <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" value={fecha} onChange={ (e) => setFecha(e.target.value) }/>
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
            <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" name="sintomas" id="sintomas" placeholder="Describe los síntomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value) }></textarea>
          </div>
          <input className="bg-indigo-600 w-full p-3 uppercase font-bold hover:bg-indigo-700 mt-5 text-white cursor-pointer transition-all" type="submit" value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}/>

        </form>
    </div>
  )
}

export default Formulario