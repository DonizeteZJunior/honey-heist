interface InputProps{
    label: string
    valor: any
    tipo?: 'text'|'email'|'number'
    valorMudou: (novoValor: any) => void
}

export default function Input(props: InputProps){
    return(
        <div className="flex flex-col text-center">
            <label>
                <p className="text-gray-700 text-md">{props.label}</p>
                <input type={props.tipo ?? 'text'} value={props.valor} 
                    onChange={e => props.valorMudou?.(e.target.value)} 
                    className={`border border-zinc-600 rounded-md w-72
                                focus:outline-yellow-950 bg-gray-50 px-4 py-2`}/>
            </label>
        </div>
    )
}