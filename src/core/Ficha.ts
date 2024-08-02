export default class FichaModel {
    #nome: string
    #tipo: string
    #categoria: string
    #funcao: string
    #chapeu: string
    #urso: number
    #ladrao: number

    constructor(nome: string, tipo: string, categoria: string, funcao: string, chapeu: string,
                urso:number = 3, ladrao:number = 3)
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
        return new FichaModel('','','','','',3,3)
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

    aumentoUrso(){
        if(this.urso < 6 && this.urso > 1){
            const nroUrso = this.urso + 1
            const nroLadrao = this.ladrao - 1
            return new FichaModel(this.nome,this.tipo,this.categoria,this.funcao,this.chapeu,nroUrso,nroLadrao)
        }     
    }

    aumentoLadrao(){
        if(this.ladrao < 6 && this.ladrao > 1){
            const nroUrso = this.urso - 1
            const nroLadrao = this.ladrao + 1
            return new FichaModel(this.nome,this.tipo,this.categoria,this.funcao,this.chapeu,nroUrso,nroLadrao)
        }
    }
}