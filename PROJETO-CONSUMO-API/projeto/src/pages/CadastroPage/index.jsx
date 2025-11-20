import './style.css';
import * as yup from 'yup';
import { useForm } from 'react-hook-from';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

const esquemaDeCadastro = yup.object({
    nome: yup
    .string()
    .requiered('O nome é obrigatorio')
    .min(3, 'O nome deve ter pelo menos 3 caracteres'),
    email: yup
    .string()
    .email('email invalido')
    .required('O email e obrigatorio'),
     senha: yup
    .string()
    .min(6,'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatorio')
})

export default function CadastroPage() {
    const {
     register: registrarCampo,
    handleSubmit: lidarComEnvioDoFormulario,
    formState: {errors: errosDoFormulario, isSubmitting: estaEnviado},
    setError: definirErroNoCampo,
    reset: limparCamposDoFormulario,
    

} = useForm ({
    resolver: esquemaDeCadastro
    defaultValues: {
        nome: '',
        email: '',
        senha: '',
    },
});
async function enviarDados(dadosDoFormulario){
    const dadosParaEnvio = {
        name: dadosDoFormulario.nome,
        email: dadosDoFormulario.email,
        password: dadosDoFormulario.senha,
    };
    try {
        const resposta = await api.post('/usuarios', dadosParaEnvio);
        toast.sucess(resposta.data.mensagem || 'Funcionario cadastrado com sucesso!');
        limparCamposDoFormulario();
    } catch (erro){
        const codigoDeStatus = error.response?.status;
        const mensagemDoServidor = error.response?.data?.mensagem || 'Erro ao cadastrar funcionario. Tente novamente mais tarde.'

        if (codigoDeStatus === 400) {
            definirErroNoCampo('email', {
                type: 'server',
                message: mensagemDoServidor
            });
        } else {
            toast.error(mensagemDoServidor);
            console.error('Erro ao cadastrar funcionario', erro)
    
        }
    }
}

  return(
    <>
    <div className='cadastro-container'>
        <h1>Cadastro de Funcionarios</h1>
        <form noValidate onSubmit={lidarComEnvioDoFormulario(envioarDados)}>
        {/* Nome */}
        <div className="form-group">
        <label htmlFor="campo-nome">Nome</label>
        <input 
        type="text"
        id="nome"
        placeholder="Ex.: Lucas Gabriel"
        {...registrarCampo("nome")}
        />
        </div>
        {errosDoFormulario.nome && (
            <span className="erro-message">
                {errosDoFormulario.nome.message}
             </span>
        )}
        {/* Email */}
        <div className="form-group">
            <label htmlFor="campo-email">Email: 
            </label>

            <input 
            type="email" 
            id="campo-email"
            placeholder='Ex.: a.f@gmail.com'
            {...registrarCampo('email')}
            />
        </div>

        {errosDoFormulario.senha && (<span
        className='error-message'>{errosDoFormulario.senha.mensagem}</span>
        )}

        <button type="submit" disabled={estaEnviado}>
        {estaEnviado ? 'Cadastrando...' :
        'Cadastrar'}
        </button>
        </form>
    </div>
    
    </>
  )

}

  