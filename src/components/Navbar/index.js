import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
            <img src={require('../../images/music-logo.png')} alt="logo"/>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/profile" activeStyle>
                Profile
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
                Sign-Up
            </NavLink>
            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar;
