import Link from "next/link"

interface MenuItemProps{
    url?: string
    texto: string
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps){
    function renderizarItem(){
        return (
            <p className={`flex justify-center items-center px-3 cursor-pointer 
                           hover:underline underline-offset-4 `}>
                <span className={`text-lg`}>
                    {props.texto}
                </span>
            </p>
        )
    }

    return (
        <li className="flex h-full items-center">
            {props.url ? (
                <Link href={props.url}>
                    {renderizarItem()}
                </Link>
            ):(
                renderizarItem()
            )}
        </li>
    )
}