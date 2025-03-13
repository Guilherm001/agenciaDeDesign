import Image from "next/image";
import Banner from "/public/banner.jpg"
import Style from "./secaoBanner.module.css"


export default function SecaoBanner(props){
    return(
        <section className={props.temaEscuro ? Style.escuro : Style.claro}>

        <div className={Style.container_pai}>

            <div className={Style.container_filho}>

                <div className={Style.image}>
                </div>
            </div>

            <div className={Style.container_filho}>

                <div className={Style.container_neto}>
                    <p>BRANDING / UI / UX / TECNOLOGIA</p>

                    <h2>Agencia de branding</h2>

                    <h1>
                        <span>
                            e design digital
                        </span>
                    </h1>
                </div>
            </div>
        </div>
        </section>
    )
}