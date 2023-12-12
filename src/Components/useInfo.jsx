import { useContext } from "react"
import UserContext from "../contexts/useContext"

function useInfo () {

    /* Chamando o contexto  */
    /* Chamando o useContext do react e chamando meu contexto UserContext q contem os dados
    a serem compartilhados */

    const user = useContext(UserContext)

    return(
        <div>
            <h2>Informaçoes do Usuario</h2>
            <p>o nome eh {user.name}</p>
            <p>o nome eh {user.email}</p>
        </div>
    )
}

export default useInfo