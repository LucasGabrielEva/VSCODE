import { useState } from 'react'
import './style.css'

export default function AdicionarAluno() {
    //Criando e inicializando as variaveis 
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    // Criando uma lista para adicionar os nomes dos alunos
    const [listaAlunos, setListaAlunos] = useState([])

    //Função para adicionar dados de aluno na lsita de aluno
    const addAluno = (event) => {
        //Evitar que a pagina seja recarregada ao adicionar aluno.
        event.preventDefault()
        if(nome && email){
            //add os dados anteriores + novos dados.
            setListaAlunos([...listaAlunos, {nome, email}])
            //define o valor dos campos como vazio novamente.
            setNome('')
            setEmail('')
        }
    }
 

    return(
        <div>

        <h2>Adicionar Aluno</h2>
        
        <form onSubmit={addAluno}>
            <input 
            type='text' 
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
            <input 
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit'>Adicionar</button>
        
        
        
        </form>
        
        <hr />
       
        <h3>Matriculados</h3>
        <ul>
            {listaAlunos.map((aluno, index) =>    (

            <ol key={index}>{aluno.nome} - {aluno.email}</ol>

            ))}
        </ul>
        
        
        </div>

    )
}