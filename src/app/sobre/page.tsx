import Pagina from "@/components/template/Pagina";
import Profile from "../../../public/avatar.png"
import Image from "next/image";

export default function Sobre(){
    return(
        <Pagina titulo="Sobre mim" subtitulo="Estamos contruindo algo aqui">
            <div className="flex flex-col sm:flex-row justify-center items-center border-2 rounded-lg p-4">
                <div className="flex flex-col p-2 justify-center items-center w-72">
                    <Image src={Profile} alt="imagem que referencia o avatar do criador da página" 
                           className={`rounded-lg`}></Image>
                    <label><i>Avatar meramente expositivo</i></label>
                </div>
                <div className="flex flex-1 flex-col justify-center text-justify">
                    <p className="px-4 py-2">
                        &ensp; Olá, sou apenas um jovem programador, parte de uma comunidade de RPG inclusiva (Role Cotidiano), 
                        praticando um pouco de NextJS/React aqui nesse site, o código do mesmo deixo de livre acesso no 
                        <a href="https://github.com/DonizeteZJunior/honey-heist" target="_blank" className="text-yellow-800 font-bold">GitHub</a> e todos os direitos são 
                        reservados a <b>Grant Howitt</b> criador do RPG 
                        <a href="https://gshowitt.itch.io/honey-heist" target="_blank" className="text-yellow-800 font-bold"> Honey Weist </a> 
                        e também a <a target="_blank" href="https://panfletinhos.itch.io/oroubodomel" className="text-yellow-800 font-bold">Panfletinhos </a>
                        que fez a tradução do mesmo. 
                    </p>
                    <p className="px-4 py-2">
                        &ensp; Espero que se divirtam usando a ficha do site e que sirva de inspiração para que aja mais projetos
                        que abracem fichas de outros sistemas de bolso.
                    </p>
                    <p className="px-4 py-2">
                        <b>P.S:</b> Os dados da ficha são salvos no LocalStorage do navegador, não precisando de Banco de Dados.
                    </p>
                </div>
            </div>
        </Pagina>
    )
}