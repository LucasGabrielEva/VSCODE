import './style.css';

export default function Header() {
return(
    <>
    <hearder className="header">
        <Link to= "/">SENAI</Link>
        <nav>
            <Link to="/cadastro">Cadastrar Funcionários</Link>
            <Link to="/funcionarios">Listar Funcionários</Link>
        </nav>

    </hearder>    
    </>
  );
}