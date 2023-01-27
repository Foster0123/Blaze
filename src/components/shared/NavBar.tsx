import * as React from 'react'
import { Button } from '@chakra-ui/react'
import ThemeSwitch from './ThemeSwitch';
import { NavLink } from 'react-router-dom'
import Logo from './../../assets/img/blaze.png'
import ProfilePicture from './../../assets/img/user.png'
const NavBar = () => {
    return (
        <nav className="navbar">
            <section className="navbar-header">
                <NavLink to="/" className="home-link">
                    <img src={Logo} alt="Blaze Logo" className="nav-logo" />
                    <h1 className="nav-title">Blaze</h1>
                </NavLink>
                <ThemeSwitch />
                
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
            </ul>
            <section className="nav-button-container">
                <Button
                    colorScheme="none"
                    className="chakra-btn nav-profile-btn"
                >
                    <img
                        className="profile-image"
                        src={ProfilePicture}
                        alt="Profile Picture Placeholder"
                    />
                </Button>
                <Button colorScheme="teal" className="chakra-btn nav-menu-btn">
                    <i className="fa-solid fa-xmark"></i>
                </Button>
            </section>
        </nav>
    )
}
export default NavBar
