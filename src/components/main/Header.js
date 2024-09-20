import React,{useState,useEffect} from 'react'
import 'assets/css/header.css'
import {NavLink} from 'react-router-dom'
import DebouncedSearch from './DebouncedSearch'

function Header(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const handleMenuToggle = () => {
            setMenuOpen(!menuOpen);
            console.log("Menu toggled");
        };
    return (
        <header id ="header" className="header">
            <div className="header_wrap" >
                <h1><NavLink to="/"><img src={require("assets/images/header/logo-red.svg").default} alt="코카콜라 컴퍼니" /></NavLink></h1>
                <nav id='nav' className={`nav ${menuOpen ? 'open' : 'nav'}`}>                    <ul className="gnb">
                        <li><NavLink to="/brand">코카-콜라 제품</NavLink></li>
                        <li>
                            <p>코카-콜라 역사</p>
                            <ul className='snb'>
                                <li><NavLink to="company">코카콜라 컴퍼니</NavLink></li>
                                <li><NavLink to="since">since 1886</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/story">브랜드 스토리</NavLink>
                        </li>
                        <li>
                            <p>사회적 가치</p>
                            <ul className='snb'>
                                <li><NavLink to="sustainability">지속가능성</NavLink></li>
                                <li><NavLink to="social">사회환원</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <DebouncedSearch></DebouncedSearch>
                <div className="hamburger_menu" onClick={handleMenuToggle}></div>
                {/* <div className="closed_menu"></div> */}
            </div>
        </header>
    )
}

export default Header