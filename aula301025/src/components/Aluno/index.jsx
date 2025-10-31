import '.style.css'
import { useState } from 'react'

export default function Aluno(){
    
    const [Nome, setNome] = useState ("Lucas")
    const [Email, setEmail] = useState ("lucasgabriel@gmail.com")
    const[CPF, setCPF] = useState ("123.456.789-10")

    return 
    <div className='aluno'>
       <h2>Dados do Aluno</h2>
        <p><strong>Nome:</strong> { nome }</p>
        <p><strong>Email:</strong>{ email }</p>
        <p><strong>CPF</strong>{cpf}</p>




    </div>
}