"use client";
import { useState } from "react";
import Styles from "./page.module.css";
import Topo from "./components/topo/index";
import SecaoBanner from "./components/SecaoBanner/index"
import SecaoExperienciaTrabalho from "./components/SecaoExperienciaTrabalho/index";
import Card from "./components/Card";


export default function Home() {
  // função para alterar o tema do projeto (escuro / claro)

  const [temaEscuro, setTemaEscuro] = useState(false);

  function mudarTema() {
    setTemaEscuro(!temaEscuro);
  }

  return (
    <div>
      <Topo acao_click={mudarTema} />
      <SecaoBanner />
      <SecaoExperienciaTrabalho />

      <div className={Styles.Card}>
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}
// <div className={temaEscuro ? styles.escuro : styles.claro}>
       // </div>