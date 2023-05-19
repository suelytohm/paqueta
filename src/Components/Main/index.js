import React from 'react'

import img1 from "../../assets/calcados-femininos.png"
import img2 from "../../assets/calcados-masculinos.png"

import "./style.css"

export const Main = () => {
  return (
    <section className='main'>
        <div className='main-page'>
            <img src={img1} alt="mulher" />
            <div className='main-description'>
                <p>Escolher o seu sapato favorito entre nossa <strong>variedade de modelos e cores</strong> não será uma tarefa fácil, mas o que uma mulher não consegue fazer? </p>
                <button><strong>CONFERIR</strong></button>
            </div>
        </div>
        <div className='main-page'>
            <div className='main-description'>
                <p>Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para o dia a dia, trabalho e até mesmo para praticar esportes!</p>
                <button><strong>CONFERIR</strong></button>
            </div>
            <img src={img2} alt="homem" />
        </div>
    </section>
  )
}
