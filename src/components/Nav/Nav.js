import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'


const Nav = () => {


    return (
       <nav>

        <NavLink to="/categoria/calientes"> Platos calientes </NavLink> 
        <NavLink to="/categoria/frios"> Platos frios </NavLink>


       </nav>
    )
}

export default Nav
