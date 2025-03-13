"use client";
import { useState } from "react";
import Styles from "./page.module.css";
import Topo from "./components/topo/index";
import SecaoBanner from "./components/SecaoBanner/index";
import SecaoExperienciaTrabalho from "./components/SecaoExperienciaTrabalho/index";
import Rodape from "./components/Rodape";

export default function Home() {
  // função para alterar o tema do projeto (escuro / claro)

  const [temaEscuro, setTemaEscuro] = useState(false);

  function mudarTema() {
    setTemaEscuro(!temaEscuro);
  }

  return (
    <div>
      <Topo acao_click={mudarTema} temaEscuro={temaEscuro} />
      <SecaoBanner />
      <SecaoExperienciaTrabalho temaEscuro={temaEscuro} />

      <Rodape temaEscuro={temaEscuro} />
    </div>
  );
}
// <div className={temaEscuro ? styles.escuro : styles.claro}>
// </div>
