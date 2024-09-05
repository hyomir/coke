import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Header() {
    return (
        <header id ="header" className="header">
        <h1><NavLink to="/">로고</NavLink></h1>
        <nav>
            <ul className="gnb">
                <li><NavLink to="/brand">코카-콜라 제품</NavLink></li>
                <li>
                    <NavLink to="/history">코카-콜라 역사</NavLink>
                    <ul>
                        <li><NavLink to="/history/company">코카콜라 컴퍼니</NavLink></li>
                        <li><NavLink to="/history/since">since 1886</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/story">브랜드 스토리</NavLink></li>
                <li>
                    <NavLink to="/social-value">사회적 가치</NavLink>
                    <ul>
                        <li><NavLink to="/social-value/sustainability">지속가능성</NavLink></li>
                        <li><NavLink to="/social-value/social">사회환원</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <Outlet />
        </header>
    )
}

export default Header