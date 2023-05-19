import React from 'react'
import { Navbar } from '../Navbar'
import "./style.css"


import { AiFillCustomerService } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";


import logo from "../../assets/logo.png"

export const Header = () => {
  return (
    <header>
        <div className='topo-header'>
            <div className='slogan'>
                <p>Loja de Calçados e Moda Online</p>
            </div>
            <div className='links-externos'>
                <p><AiFillCustomerService className='icone-branco'/> Fale Conosco</p>
                <p><FaMapMarkerAlt className='icone-branco' />Encontre uma loja física</p>
            </div>
        </div>
        <div className="menu-logo">
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='links-menu-logo'>
                <ul>
                    <li><FiHeart className='icone-header' /> Lista de Desejos</li>
                    <li><FiShoppingBag className='icone-header' /> Sacola</li>
                    <li><BiUser className='icone-header' /> Entrar</li>
                </ul>
            </div>
        </div>
        <Navbar/>
    </header>
  )
}
