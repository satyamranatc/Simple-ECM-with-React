import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='MainNav' >
        <h2>Shop.Io</h2>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Products"}>Produts</Link></li>
        </ul>

    </nav>
  )
}
