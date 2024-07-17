"use client"
import Coluna from "@/components/Coluna";
import Input from "@/components/Input";
import Pagina from "@/components/template/Pagina";
import useFicha from "@/hooks/useFicha";
import React, { useState } from 'react'

export default function Ficha(){
    const { ficha } = useFicha()

    const [nome, setNome] = useState<string>(ficha?.nome ?? '')
    const [tipo, setTipo] = useState<string>(ficha?.tipo ?? '')
    const [categoria, setCategoria] = useState<string>(ficha?.categoria ?? '')
    const [funcao, setFuncao] = useState<string>(ficha?.funcao ?? '')
    const [chapeu, setChapeu] = useState<string>(ficha?.chapeu ?? '')

    return(
        <Pagina titulo="Ficha" subtitulo="Ficha de jogo para os players">
            <section className="flex flex-row justify-center">
                <div>
                    <Coluna />
                </div>
                <div className="flex flex-col">
                    <Input label="Nome" valor={nome} tipo="text" valorMudou={setNome} />
                    <Input label="Tipo de urso/Habilidade" valor={tipo} tipo="text" valorMudou={setTipo} />
                    <Input label="Categoria" valor={categoria} tipo="text" valorMudou={setCategoria} />
                    <Input label="Função" valor={funcao} tipo="text" valorMudou={setFuncao} />
                    <Input label="Chapéu" valor={chapeu} tipo="text" valorMudou={setChapeu} />
                </div>
                <div>
                    <Coluna />
                </div>
            </section>
            <div className="flex flex-row justify-center">
                <p>Salvar</p>
                <p>Excluir</p>
            </div>
        </Pagina>
    )
}