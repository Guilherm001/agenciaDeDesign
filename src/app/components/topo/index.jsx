'use client'

import Image from "next/image"
import Style from "./topo.module.css"
import { useState } from "react"

export default function Topo (props){
    
   


    return(
        <div className={Style.container_pai}>

            <div className={Style.container_filho}>

            <Image src="/logo.png" alt="Descrição" width={50} height={35} />

            </div>

            <div className={Style.secao_botao}>
                
                <button onClick={props.acao_click}>
                    <Image src="/moon.png" alt="icone" width={25} height={25} />
                </button>

            </div>
        </div>
    )
}