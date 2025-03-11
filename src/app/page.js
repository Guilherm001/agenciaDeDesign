"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Topo from "./components/topo/index";
import SecaoBanner from "./components/SecaoBanner/index"


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
    </div>
  );
}
