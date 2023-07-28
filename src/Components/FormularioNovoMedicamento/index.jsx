import { useState } from "react"
import "./index.css"

function FormularioNovoMedicamento () {

    const [nome, setNome] = useState("");
    const [laboratorio, setLaboratorio] = useState("");
    const [preco, setPreco] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className="container">
            <h2 className="subtitulo">Formulário de Medicamento</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Insira o nome do medicamento" value = {nome} onChange={(e) => setNome(e.target.value)}/>
                <input type="text" placeholder="Insira o nome do laboratório" value = {laboratorio} onChange={(e) => setLaboratorio(e.target.value)}/>
                <input type="number" placeholder="Insira preço do medicamento" value = {preco} onChange={(e) => setPreco(e.target.value)}/>
                <button>Cadastrar Novo!</button>
            </form>
        </div>
    )
}

export default FormularioNovoMedicamento