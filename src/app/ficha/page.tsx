"use client"
import Botao from "@/components/Botao";
import Input from "@/components/Input";
import Pagina from "@/components/template/Pagina";
import FichaModel from "@/core/Ficha";
import useFicha from "@/hooks/useFicha";
import React, { useEffect, useState } from 'react'

export default function Ficha(){
    const { ficha,
            carregarFicha,
            excluirFicha,
            salvarFicha
     } = useFicha()

    const [nome, setNome] = useState<string>(ficha?.nome ?? '')
    const [tipo, setTipo] = useState<string>(ficha?.tipo ?? '')
    const [categoria, setCategoria] = useState<string>(ficha?.categoria ?? '')
    const [funcao, setFuncao] = useState<string>(ficha?.funcao ?? '')
    const [chapeu, setChapeu] = useState<string>(ficha?.chapeu ?? '')

    function carregamentoFicha(){
        const ficha = carregarFicha()
        setNome(ficha?.nome ?? '')
        setTipo(ficha?.tipo ?? '')
        setCategoria(ficha?.categoria ?? '')
        setFuncao(ficha?.funcao ?? '')
        setChapeu(ficha?.chapeu ?? '')
    }

    useEffect(() => {
        carregamentoFicha()
    }, [])

    return(
        <Pagina titulo="Ficha" subtitulo="Ficha de jogo para os players">
            <section className="flex flex-row justify-center">
                <div className="flex flex-col">
                    <Input label="Nome" valor={nome} tipo="text" valorMudou={setNome} />
                    <Input label="Tipo de urso/Habilidade" valor={tipo} tipo="text" valorMudou={setTipo} />
                    <Input label="Categoria" valor={categoria} tipo="text" valorMudou={setCategoria} />
                    <Input label="Função" valor={funcao} tipo="text" valorMudou={setFuncao} />
                    <Input label="Chapéu" valor={chapeu} tipo="text" valorMudou={setChapeu} />
                </div>
            </section>
            <div className="flex flex-row justify-center mt-2">
                <Botao cor='verde' className="mr-2" onClick={() => salvarFicha(new FichaModel(nome,tipo,categoria,funcao,chapeu,3,3))}>
                    Salvar
                </Botao>
                <Botao cor='vermelho' onClick={() => excluirFicha()} >
                    Excluir
                </Botao>
            </div>
        </Pagina>
    )
}