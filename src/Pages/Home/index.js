import React from 'react'
import "./style.css"
import cartao from "../../assets/faixa/1.svg"
import mapa from "../../assets/faixa/3.svg"
import porcentagem from "../../assets/faixa/2.svg"
import frete from "../../assets/faixa/4.svg"
import troca from "../../assets/faixa/5.svg"

import banner from "../../assets/banner-hero.png"
import { Marcas } from '../../Components/Marcas'
import { Main } from '../../Components/Main'

export const Home = () => {
  return (
    <section className='home'>
        <div className='banner'>
            <img src={banner} alt="banner" />
        </div>
        <div className='faixa'>
            <div className='facilidades'>
                <img src={cartao} alt="cartao" />
                <p>PAGUE EM ATÉ 10X<br/><strong>SEM JUROS*</strong></p>
            </div>
            <div className='facilidades'>
                <img src={mapa} alt="mapa" />
                <p><strong>RETIRE GRÁTIS</strong><br/>EM NOSSAS LOJAS</p>
            </div>
            <div className='facilidades'>
                <img src={porcentagem} alt="porcentagem" />
                <p>GANHE 20% DE<br/>DESCONTO*</p>
            </div>
            <div className='facilidades'>
                <img src={frete} alt="cartao" />
                <p><strong>FRETE GRÁTIS</strong> PARA<br/>REGIÕES SUL E SUDESTE*</p>
            </div>
            <div className='facilidades'>
                <img src={troca} alt="troca" />
                <p>PRIMEIRA TROCA GRÁTIS</p>
            </div>
        </div>
        <Main />
        <Marcas />
    </section>
  )
}
