import React from 'react'

const CarouselItem = ({ item }) => {
    return (
        <div className="carouselItem">
            <div>{item.title}</div>
            <img src={item.icon} alt="" className="carouselImg" />
            <div className="carouselDesc">{item.description} </div>
        </div>
    )
}

export default CarouselItem