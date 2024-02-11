import React from 'react'
import Search from '~/components/search/Search'
import About from '~/components/about/About'
import './home.scss'

const Home = () => {
    return (
        <div className='home' >
            <div className="container">
                <Search />
                <About />
                {/* <Slide /> */}

            </div>
        </div>
    )
}

export default Home