'use client'
import React from 'react';
import Style from './secaoExperiencia.module.css'
import Card from '../Card';
const SecaoExperienciaTrabalho = (props) => {
    return (
        <section className={props.temaEscuro ? Style.escuro : Style.claro}>
        <div className={Style.container_pai}>

            <div className={Style.container_texto}>

                <h2>Experiências De Trabalho</h2>
                <div className={Style.linha}></div>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.</p>
            </div>
            
            <div className={Style.Card}>
                <Card 
                temaEscuro={props.temaEscuro}
                Data="JUNHO 2012 - 2016"
                Titulo="Web Designer"
                Paragrafo="Pied Piper StartUp."
                Descricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card 
                temaEscuro={props.temaEscuro}
                Data="AGOSTO 2016 - 2019"
                Titulo="Product Designer"
                Paragrafo="E Corp."
                Descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                />
                <Card 
                temaEscuro={props.temaEscuro}
                Data="FEVEREIRO 2019 - 2021"
                Titulo="Digital Consulting"
                Paragrafo="Arasaka Inc."
                Descricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
            </div>
        </div>
        </section>
    );
};

export default SecaoExperienciaTrabalho;