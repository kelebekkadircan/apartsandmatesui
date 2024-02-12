import React from 'react'
import { cards } from '~/data'
import './card.scss'

const Card = ({ item }) => {
    return (
        <div className="card">
            <img src={item.img} alt="" />
            <span className="desc">{item.desc}</span>
            <span className="title">{item.title}</span>
        </div>
    )
}

export default Card