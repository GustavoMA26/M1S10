import { useContext, useState } from 'react'
import './App.css'
import Header from "./Components/Header"
import FormularioNovoMedicamento from './Components/FormularioNovoMedicamento'
import CardMedicamento from './Components/CardMedicamento'
import { MedicamentosContext } from './Context/MedicamentosContext'


function App() {

  const {listaMedicamentos} = useContext(MedicamentosContext)

  return (
    <>
    <Header />
      <FormularioNovoMedicamento />
      {listaMedicamentos.map(medicamento => (
        <CardMedicamento key={medicamento.id} medicamento ={medicamento} />
    ))}
    </>
  )
}

export default App
