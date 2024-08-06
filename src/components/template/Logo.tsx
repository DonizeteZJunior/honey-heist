import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return (
        <Link href="/" className="flex items-center h-14">
            <Image src="/logo.png" alt="Um pote de mel que é o logo do site"  
                width={50} height={50}/>
        </Link>
    )
}