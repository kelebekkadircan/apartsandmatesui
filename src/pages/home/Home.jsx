import React from 'react'
import Search from '~/components/search/Search'
import './home.scss'
import Slide from '~/components/slide/Slide'

const Home = () => {
    return (
        <div className='home' >
            <div className="container">
                <Search />
                {/* <Slide /> */}
            </div>
        </div>
    )
}

export default Home