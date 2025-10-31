import './App.css'
import Aluno from './components/Aluno'
import InfoCurso from './components/infoCurso'

import Mensagem from './components/Mensagem'

function App() {
  

  return (
   //Fragment.
   <>
      <h1>Senai</h1>
      <Mensagem/>
      <InfoCurso/>
      <Aluno/>
      
    </>
  )
}

export default App
