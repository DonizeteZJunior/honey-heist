import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuPrincipal(){
    return(
        <nav className="flex flex-row h-[80px] bg-yellow-950 text-stone-200 shadow-md">
            <div className="flex flex-col items-center justify-center w-20">
                <Logo />
            </div>
            <ul className="flex flex-row flex-grow justify-end items-center">
                <MenuItem url="/" texto="Início" />
                <MenuItem url="/ficha" texto="Ficha" />
                <MenuItem url="/sobre" texto="Sobre Mim" />
            </ul>
            {/* Implementar no futuro opção de idioma (br-en) */}
        </nav>
    )
}