import Tema from './Tema'

interface Postagem {
    id: number
    titulo: string
    texto: string
    data: string
    tema?: Tema | null //estrutura do tipo "Tema" referente a estrutura da model de Tema
}

export default Postagem;

/* 
    postagem: {
        id: 1,
        titulo: "Postagem A",
        ...,
        tema:{
            id: 2,
            desc: "Tema A"
        }
    }
*/