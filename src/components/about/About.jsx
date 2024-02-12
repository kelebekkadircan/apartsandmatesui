import React from 'react'
import './about.scss'
import Slide from '../slide/Slide'
import { Link } from 'react-router-dom'


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
                        <h1><span style={{ color: "red" }}>Neden</span> ve Nasıl <br /> Aparts&<span style={{ color: "red" }}>Mates</span> ? </h1>
                        <p>Alanyanın ilk Apart Otel tanıtım rehberi aparts&mates.com 2024 yılından bu yana <br /> apart arayan üniversite öğrencileriyle apart sahiplerini bir araya getiriyor. <br /> Kriterlerinize uygun apartı bulamazsanız, arayın sizin için en uygun apartı bulalım !  </p>
                        <Link>Devamını Oku <span> {"=>"} </span></Link>

                    </div>
                    <div className="right">
                        Resim
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About