'use client'

import Image from "next/image"
import Style from "./topo.module.css"
import { useState } from "react"
export default function Topo (props){
    
   const iconSol = '/sun.png'
   const iconLua = '/moon.png'


    return(
        <div className={props.temaEscuro ? Style.escuro : Style.claro}>
        <div className={Style.container_pai}>
            <div className={Style.container_filho}>
                
                    <Image src="/logo.png" alt="Descrição" width={50} height={35} />
                

            </div>

            <div className={Style.secao_botao}>
                
                <button onClick={props.acao_click} className={props.temaEscuro ? Style.botao_escuro : Style.botao_claro}>
                    <Image src={props.temaEscuro ? iconSol : iconLua} alt="icone" width={25} height={25} />
                </button>

            </div>
        </div>    
        </div>
    )
}