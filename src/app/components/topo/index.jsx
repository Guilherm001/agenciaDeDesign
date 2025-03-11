'use client'

import Image from "next/image"
import Style from "./topo.module.css"
import { useState } from "react"

export default function Topo (props){
    
   


    return(
        <div className={Style.container_pai}>

            <div className={Style.container_filho}>

            <Image src="/logo.png" alt="Descrição" width={20} height={20} />

            </div>

            <div>
                
                <button onClick={props.acao_click}>
                    <Image src="/moon.png" alt="icone" width={20} height={20} />
                </button>

            </div>
        </div>
    )
}