import Pacientes from "./Pacientes"

const ListadoPacientes = () => {
  return (
    <div className="ml-2 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      
        <h2 className="font-black text-3xl text-center">
          Listado de Pacientes
        </h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {' '}
          <span className="text-indigo-600 font-bold">Pacientes Y Citas</span>
        </p>
        <Pacientes></Pacientes>
        <Pacientes></Pacientes>
        <Pacientes></Pacientes>
        <Pacientes></Pacientes>
        
    </div>
  )
}

export default ListadoPacientes