import { useEffect, useState } from 'react';
import './style.css';

export default function ListaFuncionarioPage() {(
    const [funcionarios, setFuncionarios] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() =>{
        async function buscarFuncionarios() {
            try {
                const resposta = await api.get('/usuarios');
                setFuncionarios(resposta.data);
            } catch (erro) {
                toast.error('Erro ao buscar funcionarios. Tente novamente mais tarde.');
            } finally {
                setCarregando(false);
            }
        }
        buscarFuncionarios();
    }, []);

    if (carregando) {
        return <div>Carregando funcionarios...</div>;
    }
    return (
        <div className="lista-funcionarios-page">
            <h1>Lista de Funcionarios</h1>
 );           
}
