//function CardMedicamento ({nome, laboratorio, preco, favorito}){ //Passando por props
import './index.css'
function CardMedicamento ({medicamento}) { // Passando por objeto, através do qual se acessará os dados
    return (
        <div className="card">
            <p>Favorito:{medicamento.favorito.toString()}</p>
            <img width = {200} src="https://img.freepik.com/vetores-gratis/frasco-de-medicamento-em-branco_1284-4087.jpg?w=826&t=st=1690567417~exp=1690568017~hmac=5db4cbfb36ea1839c815f5cae02bbe8afe3755db459df48a67cc26cf137c9dcd" alt="Frasco de Medicamento"></img>
            <h2>Medicamento: {medicamento.nome}</h2>
            <h3>Laboratório: {medicamento.laboratorio}</h3>
            <h4>R${medicamento.preco}</h4>
        </div>
    )
}
export default CardMedicamento