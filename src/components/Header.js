import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Header() {
    return (
        <div>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="story">Story</NavLink></li>
                <li><NavLink to="history">역사</NavLink></li>
            </ul>
        </nav>
        <Outlet />
        </div>
    )
}

export default Header