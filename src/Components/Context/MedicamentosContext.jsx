// 1) Importe o {createContext} do React
// 2) Criar a variável do context;
//     Obs: por padrão o contexto recebe o mesmo nome do arquivo;
//     Obs: exportar a variável do context
// 3) Defina o provider
//     3.1) Defina os dados globais (que você quer passar neste contexto)
//     3.2) Defina o value do provider
//         Obs.: Geralmente o value será um objeto, pois é mais fácil de pegar através de desestruturar;
//     3.3) Defina o children
// */

import { createContext, useState } from "react";

export const MedicamentosContext = createContext();

export const MedicamentosContextProvider = ({children}) => {

    const [listaMedicamentos, setListaMedicamentos] = useState([])

    const AdicionarMedicamento = (nome, laboratorio, preco) => {
        if(nome.length == "" || laboratorio.length == "" || preco == 0) {
            alert("As informações não foram completamente preenchidas!")
            return
       }
        const NovoMedicamento = {
        id: listaMedicamentos.length +1,
        nome: nome,
        laboratorio: laboratorio,
        preco: preco,
        favorite: false 
    }

    const novaListaMedicamentos = [...listaMedicamentos]
    console.log(novaListaMedicamentos)
    novaListaMedicamentos.push(NovoMedicamento)
    alert('Medicamento cadastrado com sucesso!')
}
    return (
        <MedicamentosContext.Provider value={{listaMedicamentos, AdicionarMedicamento}}>
            {children}
        </MedicamentosContext.Provider>
    )
}

