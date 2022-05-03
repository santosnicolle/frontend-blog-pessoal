interface UserLogin {

    id: number
    usuario: string
    senha: string
    token?: string | null //dupla tipagem porque pode receber dois tipos de informação

}

{/* interface UserLogin {

    id: number
    nome: string
    usuario: string
    senha: string
    foto: string
    token?: string | null //dupla tipagem porque pode receber dois tipos de informação

} */}

export default UserLogin;

/*
    usuario = UserLogin {
        id: 1
        nome: "Nicolle"
        foto: ""
    }
*/