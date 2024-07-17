interface ColunaProps{
    titulo?: string
}

export default function Coluna(props: ColunaProps){
    return(
        <ul className="flex flex-col">
            <li>6</li>
            <li>5</li>
            <li>4</li>
            <li>3</li>
            <li>2</li>
            <li>1</li>
        </ul>
    )
}