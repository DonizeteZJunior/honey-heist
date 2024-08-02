import Cabecalho from "./Cabecalho"
import MenuPrincipal from "./MenuPrincipal"
import Rodape from "./Rodape"

interface LayoutProps{
    titulo: string
    subtitulo:string
    imagemFundo?: string
    children: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className="flex flex-col h-screen">
            <MenuPrincipal />
            <div className={`flex flex-col flex-grow`}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                {props.imagemFundo ? 
                    <main   className={`p-7 flex-1`} 
                            style={{backgroundImage: `url(${props.imagemFundo})`, 
                                    width: '100%', height: '100%', backgroundPosition:'center',
                                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity:0.7,
                                    textShadow:'2px 2px #000000' }} >
                        {props.children}
                    </main>
                : 
                    <main className={`p-7 flex-1`}>
                        {props.children}
                    </main>
                }
                <Rodape />
            </div>
        </div>
    )
}