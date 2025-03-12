import React from 'react';
import Style from './secaoExperiencia.module.css'
import Card from '../Card';
const SecaoExperienciaTrabalho = () => {
    return (
        <div className={Style.container_pai}>

            <div className={Style.container_texto}>

                <h2>Experiências De Trabalho</h2>
                <div className={Style.linha}></div>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.</p>
            </div>
            
            <div className={Style.Card}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default SecaoExperienciaTrabalho;