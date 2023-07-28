import { useState } from 'react'
import './App.css'
import Header from "./Components/Header"
import FormularioNovoMedicamento from './Components/FormularioNovoMedicamento'
import { MedicamentosContextProvider } from './Components/Context/MedicamentosContext'


function App() {

  return (
    <>
    <Header />
    <MedicamentosContextProvider>
      <FormularioNovoMedicamento />
    </MedicamentosContextProvider>
    </>
  )
}

export default App
