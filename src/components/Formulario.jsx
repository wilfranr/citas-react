const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h1 className="font-black text-3xl text-center ">
          Pacientes
        </h1>
        <p className="text-lg mt-5 text-center mb-10">
          Agregar Pacientes y {' '}
          <span className="text-indigo-600 font-bold ">Administrarlos</span>
        </p>
        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

          <div>
            <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
            <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la Mascota" />
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
            <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la propietario" />
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
            <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email de contacto" />
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">alta</label>
            <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date"/>
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
            <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" name="sintomas" id="sintomas" placeholder="Describe los síntomas"></textarea>
          </div>
          <input className="bg-indigo-600 w-full p-3 uppercase font-bold hover:bg-indigo-700 mt-5 text-white cursor-pointer transition-all" type="submit" value="Agregar Paciente" />

        </form>
    </div>
  )
}

export default Formulario