import Image from "next/image";
import Banner from "/public/banner.jpg"


export default function Secao_banner(){
    return(
        <div>
            <div>
                <Image src={Banner} alt="Banner"/>
            </div>
            <div>
                <div>
                    <p>BRANDING / UI / UX / TECNOLOGIA</p>

                    <h1>Agencia de branding</h1>

                    <h1>
                        <span>
                            e design digital
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    )
}