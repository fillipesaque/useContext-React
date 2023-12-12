import './App.css'
import UserContext from './contexts/useContext'
import UseInfo from './Components/useInfo'
import Heeader from './Components/Header'



function App() {

  const User = {
    name: 'Joao', /* obj a ser compartilhado */
    email: 'Joao@email'
  }

  return (
    <>
            {/* Declarando o contexto */}
            {/* Fornece o contexto na div desejada para q todos os filhos tenham ascesso ao contexto */}
            {/*2 passo englobar divs q deseja receber os dados do contexto  */}

          <UserContext.Provider value={User}> {/* Todos os valores passado no context , seus filhos terao ascesso */}
                <Heeader/>
                <h1>Usando useContext</h1>
                <UseInfo/>
          </UserContext.Provider>

          <>
            <div>
              {/* Nao ha acesso ao contexto */}
            </div>
          </>

    </>
  )
}

export default App
