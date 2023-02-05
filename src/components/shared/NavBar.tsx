import React, { useRef } from 'react'
import { Button, Stack } from '@chakra-ui/react'
import ThemeSwitch from '../modules/ThemeSwitch';
import { NavLink } from 'react-router-dom'
import Logo from './../../assets/img/blaze.png'
import ProfilePicture from './../../assets/img/user.png'
const NavBar = () => {
    const Navbar: any = useRef(null);
    const styles = {
        height: "200px"
    }
    const toggleNavbar = () => {
        if(window.innerWidth < 768){
            Navbar.current.classList.toggle("transit-navbar-height")
        }
    }
    return (
        <nav className="navbar" ref={Navbar}>
            <section className="navbar-header">
                <NavLink to="/" className="home-link">
                    <img src={Logo} alt="Blaze Logo" className="nav-logo" />
                    <h1 className="nav-title">Blaze</h1>
                </NavLink>
                <Stack className='nav-theme-switch'>
                    <ThemeSwitch name="theme-switch-1" id="theme-switch-1" />
                </Stack>
                
                
            </section>
            <ul className="nav-link-container">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/todos">Todos</NavLink>
                </li>
                <li>
                    <NavLink to="/signin">Sign In</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li className='theme-nav-item'>
                    <span>Appearance: </span>
                    <ThemeSwitch name="theme-switch-2" id="theme-switch-2" />
                </li>
            </ul>
            <section className="nav-button-container">
                <Button
                    onClick={toggleNavbar}
                    colorScheme="none"
                    className="chakra-btn nav-profile-btn"
                >
                    <img
                        className="profile-image"
                        src={ProfilePicture}
                        alt="Profile Picture Placeholder"
                    />
                </Button>
                <Button onClick={toggleNavbar} colorScheme="teal" className="chakra-btn nav-menu-btn">
                    <i className="fa-solid fa-xmark"></i>
                </Button>
            </section>
        </nav>
    )
}
export default NavBar
