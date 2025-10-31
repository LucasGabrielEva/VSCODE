import { useState } from 'react'
import './style.css'

export default function InfoCurso() {
 //Criado variáveis
 //useState é uma função de React JS
 // Também chamado de Hooks
    const [nome, setNome] = useState("Desenvolvimento de sistema")
    const [cargaHoraria, setCargaHorario] = useState(158)
    const [local, setLocal] = useState("Senai Dendezeiro")
    return(
    <div className='info-curso'>
    <h2>Dados do curso</h2>
    <p><strong>Nome: </strong> { nome }</p>
    <p><strong>Carga horário: </strong> {cargaHoraria} horas</p>
    <p><strong>Local: </strong> {local}</p>
    </div>
)
    

}