import React from 'react';
import Image from 'next/image';
import Style from './rodape.module.css'

const Rodape = (props) => {
    return (
        <footer className={props.temaEscuro ? Style.escuro : Style.claro}>
            <div className={Style.footer}>
                <div className={Style.subcontainer}>
                    <Image src="/logo.png" alt="Descrição" width={50} height={35} />
                
                    <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                    ferramentas e tecnologias personalizadas.</p>
                </div>
                <div className={Style.links}>
                
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Image src="/twitter.png" alt="Descrição" width={45} height={45} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Image src="/facebook.png" alt="Descrição" width={45} height={45} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Image src="/dribble.png" alt="Descrição" width={45} height={45} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Image src="/behance.png" alt="Descrição" width={45} height={45} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Image src="/google.png" alt="Descrição" width={45} height={45} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Image src="/linkedin.png" alt="Descrição" width={45} height={45} /></a>
                </div>
            </div>
            <div className={Style.final}>
                <p>Copyright 2022 <span>Gulherme Rodrigues</span></p>
            </div>
        </footer>
        
    );
};

export default Rodape;