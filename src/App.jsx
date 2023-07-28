import { useState } from 'react'
import './App.css'
import Header from "./Components/Header"
import FormularioNovoMedicamento from './Components/FormularioNovoMedicamento'
import { MedicamentosContextProvider } from './Components/Context/MedicamentosContext'
import CardMedicamento from './Components/CardMedicamento'


function App() {

  return (
    <>
    <Header />
    <MedicamentosContextProvider>
      <FormularioNovoMedicamento />
      <CardMedicamento medicamento ={{nome: 'Dorflex', laboratorio: 'Clamed', preco: 9.99, favorito: false, id: 1}} />
    </MedicamentosContextProvider>
    </>
  )
}

export default App
