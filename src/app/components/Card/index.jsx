import React from 'react';
import Styles from './card.module.css';



const Card = (props) => {
    return (
        <section className={props.temaEscuro ? Styles.escuro : Styles.claro}>
            
        <div className={Styles.card}>
            <div className={Styles.card_header}>
                <p>{props.Data}</p>
                <h2>{props.Titulo}</h2>
                <p>{props.Paragrafo}</p>
                
            </div>
            <div className={Styles.card_body}>
                <p>{props.Descricao}</p>
            </div>
        </div>
        </section>
    );
};

export default Card;