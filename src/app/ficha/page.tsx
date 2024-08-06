"use client"
import Botao from "@/components/Botao";
import Input from "@/components/Input";
import Pagina from "@/components/template/Pagina";
import FichaModel from "@/core/Ficha";
import useFicha from "@/hooks/useFicha";
import UseNotificacao from "@/hooks/useToast";
import React,{ useEffect, useState } from 'react';

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
    const [urso, setUrso] = useState<number>(ficha?.urso ?? 3)
    const [ladrao, setLadrao] = useState<number>(ficha?.ladrao ?? 3)

    useEffect(() => {
        carregamentoFicha()
    }, [])

    function carregamentoFicha(){
        const ficha = carregarFicha()
        setNome(ficha?.nome ?? '')
        setTipo(ficha?.tipo ?? '')
        setCategoria(ficha?.categoria ?? '')
        setFuncao(ficha?.funcao ?? '')
        setChapeu(ficha?.chapeu ?? '')
        setUrso(ficha?.urso ?? 3)
        setLadrao(ficha?.ladrao ?? 3)
    }

    function salvandoFicha(){
        salvarFicha(new FichaModel(nome,tipo,categoria,funcao,chapeu,urso,ladrao))
        UseNotificacao('Ficha salva com sucesso!')
        carregamentoFicha()
    }

    function excluindoFicha(){
        excluirFicha()
        UseNotificacao('Ficha excluida com sucesso!')
        carregamentoFicha()
    }

    return(
        <Pagina titulo="Ficha" subtitulo="Ficha de jogo para os players">
            <section className="flex flex-row justify-center">
                <div className="flex flex-col text-center">
                    <Input label="Urso" valor={urso} tipo="number" valorMudou={setUrso} />
                </div>
                <div className="flex flex-col">
                    <Input label="Nome" valor={nome} tipo="text" valorMudou={setNome} />
                    <Input label="Tipo de urso/Habilidade" valor={tipo} tipo="text" valorMudou={setTipo} />
                    <Input label="Categoria" valor={categoria} tipo="text" valorMudou={setCategoria} />
                    <Input label="Função" valor={funcao} tipo="text" valorMudou={setFuncao} />
                    <Input label="Chapéu" valor={chapeu} tipo="text" valorMudou={setChapeu} />
                </div>
                <div className="flex flex-col text-center">
                    <Input label="Ladrão" valor={ladrao} tipo="number" valorMudou={setLadrao} />
                </div>
            </section>
            <div className="flex flex-row justify-center mt-2">
                <Botao cor='verde' className="mr-2" onClick={() => salvandoFicha()}>
                    Salvar
                </Botao>
                <Botao cor='vermelho' onClick={() => excluindoFicha()} >
                    Excluir
                </Botao>
            </div>
        </Pagina>
    )
}