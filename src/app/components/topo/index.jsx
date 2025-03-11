'use client'

import Image from "next/image"
import Style from "./topo.module.css"
import { useState } from "react"

export default function Topo (){
    
    const [temaEscuro, setTemaEscuro] = useState(false)

    function mudarTema(){
        setTemaEscuro(!temaEscuro)
    }


    return(
        <div className={Style.container_pai}>

            <div className={Style.container_filho}>

            <Image src="/logo.png" alt="Descrição" width={20} height={20} />

            </div>

            <div>
                
                <button></button>

            </div>
        </div>
    )
}