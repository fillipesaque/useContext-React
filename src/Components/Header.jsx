import { useContext } from "react"
import UserContext from "../contexts/useContext"

function Heeader () {

    /* Chamando o contexto  */
    /* Chamando o useContext do react e chamando meu contexto UserContext q contem os dados
    a serem compartilhados */

    const Heder = useContext(UserContext) 


    return (
        <header>
            <h3>Bem Vindo {Heder.name}</h3>
        </header>
    )
}

export default Heeader