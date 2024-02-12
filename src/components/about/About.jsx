import React from 'react'
import './about.scss'
import Slide from '../slide/Slide'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";



const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="top">
                    <div className="slideContainer">
                        <Slide />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <h1><span style={{ color: "rgb(28, 92, 144)" }}>Neden</span> ve Nasıl <br /> Aparts&<span style={{ color: "rgb(28, 92, 144)" }}>Mates</span> ? </h1>
                        <p style={{ fontSize: "16px", fontWeight: "400" }} >Alanyanın ilk Apart Otel tanıtım rehberi aparts&mates.com 2024 yılından bu yana <br /> apart arayan üniversite öğrencileriyle apart sahiplerini bir araya getiriyor. <br /> Kriterlerinize uygun apartı bulamazsanız, arayın sizin için en uygun apartı bulalım !  </p>
                        <div className='aboutLink'>
                            <Link to='/about' className='link' >Devamını Oku </Link>
                            <div> <FaArrowRight /> </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className='imgContainer'>
                            <img src="/img/apartment.svg" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About