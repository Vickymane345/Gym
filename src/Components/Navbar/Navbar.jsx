import React, {useState} from 'react'
import './Navbar.css'
import logo_icon from '../../assets/Logo(1).png'
import {BsCart3} from "react-icons/bs";
import menu_icon from "../../assets/menu.png"
const Navbar = () => {
    const style = {
        color: "white",
        fontSize: "1.5em"
    }
    const [mobileMenu,
        setMobileMenu] = useState(false)
    const toggleMenu = () => {
        mobileMenu
            ? setMobileMenu(false)
            : setMobileMenu(true)
    }

    return (
        <nav className='container navbar'>
            <img src={logo_icon} className='logo' alt=""/>
            <div className='navbar_content1'>

                <input type="text" className='search' placeholder='search'/>
                <button className='btn'>Search</button>
            </div>
            <div className='navbar_content2'>
                <ul className={mobileMenu? '': 'hide-mobile-menu'} >
                    <li>HOME</li>
                    <li>
                        CONTACT US</li>
                    <li>LOGIN</li>
                    <li>SIGN UP</li>
                    <li><BsCart3 style={style}/></li>
                </ul>
            </div>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />

        </nav>
    )
}

export default Navbar
