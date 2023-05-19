import React from 'react'
import adidas from "../../assets/logos/adidas.png"
import viaMarte from "../../assets/logos/via-marte.png"
import dumond from "../../assets/logos/dumond.png"
import bebece from "../../assets/logos/bebece.png"

import "./style.css"

export const Marcas = () => {
  return (
    <section className='marcas'>
        <div className='titulo'>
            <h2>AS MELHORES MARCAS ESTÃO AQUI!</h2>
            <p></p>
        </div>
        <div className='lista-marcas'>
            <img src={adidas} alt="logo-adidas" />
            <img src={viaMarte} alt="logo-viaMarte" />
            <img src={dumond} alt="logo-dumond" />
            <img src={bebece} alt="logo-bebece" />
        </div>
    </section>
  )
}
