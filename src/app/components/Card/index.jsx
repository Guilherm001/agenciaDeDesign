import React from 'react';
import Styles from './card.module.css';



const Card = () => {
    return (
        <div className={Styles.card}>
            <div className={Styles.card_header}>
                <h2>Web Designer</h2>
                <h3>Pied Piper StartUp.</h3>
                <p>JUNHO 2012 - 2016</p>
            </div>
            <div className={Styles.card_body}>
                <p>Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores</p>
            </div>
        </div>
    );
};

export default Card;