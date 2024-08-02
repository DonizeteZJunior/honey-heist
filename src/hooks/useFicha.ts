import FichaModel from "@/core/Ficha";
import Ficha from "@/core/Ficha";
import { useEffect, useState } from "react";

export default function useFicha(){
    const [ficha, setFicha] = useState<Ficha>(Ficha.vazio())

    function salvarFicha(fichaASalvar: Ficha){
        setFicha(fichaASalvar)
        const fichaJSON = { nome: ficha.nome,
                            tipo: ficha.tipo,
                            categoria: ficha.categoria,
                            funcao: ficha.funcao,
                            chapeu: ficha.chapeu,
                            urso: ficha.urso,
                            ladrao: ficha.ladrao }
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