interface CabecalhoProps{
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps){
    return(
        <div className="flex bg-gray-300 justify-center p-2 shadow-md">
            <h1 className="text-black">
                {props.titulo}
            </h1>
            <h2 className="text-zinc-500">
                | {props.subtitulo}
            </h2>
        </div>
    )
}