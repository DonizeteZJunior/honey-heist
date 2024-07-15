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
            <p className={`flex justify-center items-center px-3`}>
                <span className={`text-lg`}>
                    {props.texto}
                </span>
            </p>
        )
    }

    return (
        <li className="flex h-full items-center hover:bg-stone-600 cursor-pointer">
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