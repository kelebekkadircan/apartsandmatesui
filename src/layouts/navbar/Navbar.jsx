
import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import './navbar.scss'


const Navbar = () => {


    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);


        return () => {
            window.removeEventListener("scroll", isActive)
        };
    }, [])

    const currentUser = {
        id: 1,
        username: "Kadir",
        isOwner: true
    }


    return (
        <div className={active ? "navbar active" : "navbar"} >
            <div className="container">
                <div className="logo">
                    Aparts<span className='andSign' >&</span>Mates
                </div>
                <div className="links">
                    <NavLink className="navlink" to="/about" >Hakkımızda</NavLink>
                    <NavLink className="navlink" to="/favorites" >Favoriler</NavLink>
                    <NavLink className="navlink" to="/contact" >İletişim</NavLink>
                    <NavLink className="navlink" to="/roommates" >Oda Arkadaşı Bul</NavLink>
                    {!currentUser && <Link to='/register' >
                        <button>Giriş Yap</button>
                    </Link>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img
                                src='https://images.pexels.com/photos/4484954/pexels-photo-4484954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                            <span>  {currentUser?.username} </span>
                            {open && (
                                <div className="options">
                                    {
                                        currentUser?.isOwner &&
                                        (
                                            <>
                                                <span>Profilim</span>
                                                <span>Profilim</span>
                                                <span>Profilim</span>
                                                <span>Profilim</span>
                                                <span>Profilim</span>
                                            </>
                                        )
                                    }
                                </div>)}
                        </div>
                    )}
                </div>
            </div>
            {active &&
                <>
                    <hr />
                    <div className="menu">
                        <span>Kestel</span>
                        <span>Oba</span>
                        <span>Tosmur</span>
                        <span>Saray</span>
                    </div>
                </>
            }
        </div>
    )
}

export default Navbar