import React, { useState } from 'react'
import CarouselItem from './CarouselItem'
import './carousel.scss'


const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const items = [
        {
            title: "BLA BLA BLA",
            description: "bla bla bla",
            icon: "./img/apartment.svg"
        },
        {
            title: "BLA2 BLA2 BLA2",
            description: "bla2 bla2 bla2",
            icon: "./img/apartment.svg"
        },
        {
            title: "BLA3 BLA3 BLA3",
            description: "bla bla bla",
            icon: "./img/apartment.svg"
        },
    ]


    return (
        <div className='carousel'>
            <div
                className="container"
                style={{ transform: `translate:(-${activeIndex * 100})` }}
            >
                {items.map((item, i) => {
                    return <CarouselItem item={item} key={i} />
                })}
            </div>
        </div>
    )
}

export default Carousel