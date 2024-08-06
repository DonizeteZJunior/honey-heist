interface InputProps{
    label: string
    valor: any
    tipo?: 'text'|'email'|'number'
    valorMudou: (novoValor: any) => void
}

export default function Input(props: InputProps){
    function gerarInput(){
        switch(props?.tipo){
            case 'number':
                return (
                    <label className="p-4 mt-24">
                        <p className="text-gray-700 text-md font-bold">{props.label}</p>
                        <input type={props.tipo} value={props.valor} 
                            onChange={e => props.valorMudou?.(e.target.value)} 
                            className={`border-2 border-zinc-600 rounded-md w-16 h-16 px-3 py-3
                                        focus:outline-yellow-950 bg-gray-50 text-[40px] `}/>
                    </label>
                )
                break;
            default:
                return(
                    <label>
                        <p className="text-gray-700 text-md">{props.label}</p>
                        <input type={props.tipo ?? 'text'} value={props.valor} 
                            onChange={e => props.valorMudou?.(e.target.value)} 
                            className={`border border-zinc-600 rounded-md w-44 sm:w-48 md:w-72
                                        focus:outline-yellow-950 bg-gray-50 px-4 py-2`}/>
                    </label>
                )
        }
    }

    return(
        <div className="flex flex-col text-center">
            {gerarInput()}
        </div>
    )
}