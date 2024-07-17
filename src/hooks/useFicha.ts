import Ficha from "@/core/Ficha";
import { useState } from "react";

export default function useFicha(){
    const [ficha, setFicha] = useState<Ficha>(Ficha.vazio())

    return {
        ficha
    }
}