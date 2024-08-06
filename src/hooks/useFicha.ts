import FichaModel from "@/core/Ficha";
import Ficha from "@/core/Ficha";
import { useEffect, useState } from "react";

export default function useFicha(){
    const [ficha, setFicha] = useState<Ficha>(Ficha.vazio())

    function salvarFicha(fichaASalvar: Ficha){
        const fichaJSON = { nome: fichaASalvar.nome,
                            tipo: fichaASalvar.tipo,
                            categoria: fichaASalvar.categoria,
                            funcao: fichaASalvar.funcao,
                            chapeu: fichaASalvar.chapeu,
                            urso: fichaASalvar.urso,
                            ladrao: fichaASalvar.ladrao }
        localStorage.setItem('ficha',JSON.stringify(fichaJSON))
    }

    function carregarFicha(){
        const fichaSalva = localStorage.getItem('ficha') ?? ''
        if(fichaSalva === ''){
            return FichaModel.vazio()
        }
        return JSON.parse(fichaSalva)
    }

    async function excluirFicha(){
        localStorage.removeItem('ficha')
    }

    return {
        ficha,
        salvarFicha,
        carregarFicha,
        excluirFicha,
    }
}