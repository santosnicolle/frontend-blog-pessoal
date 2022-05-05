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

export const busca = async(url: any, setDados: any, header: any) => {
    const resposta = await api.get(url, header) //header referente a cabeçalho, precisamos passar o token necessário para o acesso
    setDados(resposta.data)
} //metodo de busca de dados no nosso backend

export const buscaId = async(url: any,setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
} 

export const post = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.post(url,dados,header)
    setDado(resposta.data)
}

export const put = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url,dados,header)
    setDado(resposta.data)
}

export const deleteId = async(url: any,header: any) => { 
    await api.delete(url,header)
}