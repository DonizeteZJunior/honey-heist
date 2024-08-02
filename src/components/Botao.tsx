interface BotaoProps{
    cor?: 'verde' | 'marrom' | 'vermelho'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props:BotaoProps){
    let cor = ''

    switch(props.cor){
        case 'verde':
            cor = 'bg-green-600 hover:bg-green-400'
            break;
        case 'marrom':
            cor = 'bg-amber-800 hover:bg-amber-500'
            break;
        case 'vermelho':
            cor = 'bg-red-700 hover:bg-red-400'
            break;
        default:
            cor = 'bg-green-600 hover:bg-green-400'
    }

    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r ${cor} 
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>    
    )
}