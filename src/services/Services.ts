import axios from "axios";

export const api = axios.create({
    baseURL: 'https://santosnicolle.herokuapp.com'
})

{/* nossa api é uma constante por isso deixamos de usar o default */}

export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados) //vai fazer uma requisição ao nosso back-end através da nossa api
    setDados(resposta.data)
}

export const login = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados) //vai fazer uma requisição ao nosso back-end através da nossa api
    setDados(resposta.data.token)
}

/*
    assíncrona é o ato de executar uma tarefa em "segundo plano" que espera que a busca finalize, pega seu retorno e utiliza na aplicação
    sem as funções async e await os próximos passos seram realizados sem a finalização da requisição
    
*/

/*
    no setDados(resposta.data. token)- resposta: {
                                                data: {
                                                    id
                                                    nome
                                                    usuario
                                                    senha
                                                    *token*
                                                }
    }

    as diferenças entre elas são pouquissímas, mas a principal diferença é sua sintaxe/escrita
    quando fazemos uma requisição, utilizamos uma service para atualizar um componente específicos priorizaremos
    a utilização das suas funções em flexa arrow functions

     function login(url, dados, setdados) {
        ...ação
    }

    const login = (url, dados, setDados) => {
        ...ação
    } /** estrutura com prioridade de utilização


*/