import { CardWidget } from "../cardWidget/CardWidget"
import { NavLink } from "react-router-dom"
import './header.css'
import Nav from "../Nav/Nav"

export const Header = () => {

   
    return (
        <div>
            <Nav />

            <NavLink to="/">

            <img src="img/logo.png" alt="logo" className="loguito"/>

            </NavLink>
            <CardWidget/>

        </div>
    )
}
