export default class Ficha {
    #nome: string
    #tipo: string
    #categoria: string
    #funcao: string
    #chapeu: string
    #urso: 1 | 2 | 3 | 4 | 5 | 6
    #ladrao: 1 | 2 | 3 | 4 | 5 | 6

    constructor(nome: string, tipo: string, categoria: string, funcao: string, chapeu: string,
                urso: 3, ladrao: 3)
    {
        this.#nome = nome
        this.#tipo = tipo
        this.#categoria = categoria
        this.#funcao = funcao
        this.#chapeu = chapeu
        this.#urso = urso
        this.#ladrao = ladrao
    }

    static vazio(){
        return new Ficha('','','','','',3,3)
    }

    get nome(){
        return this.#nome
    }

    get tipo(){
        return this.#tipo
    }

    get categoria(){
        return this.#categoria
    }

    get funcao(){
        return this.#funcao
    }

    get chapeu(){
        return this.#chapeu
    }

    get urso(){
        return this.#urso
    }

    get ladrao(){
        return this.#ladrao
    }
}