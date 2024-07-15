import Cabecalho from "./Cabecalho"
import MenuPrincipal from "./MenuPrincipal"
import Rodape from "./Rodape"

interface LayoutProps{
    titulo: string
    subtitulo:string
    children: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className="flex flex-col h-screen">
            <MenuPrincipal />
            <div className={`flex flex-col flex-grow`}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <main className="p-7 flex-1">
                    {props.children}
                </main>
                <Rodape />
            </div>
        </div>
    )
}