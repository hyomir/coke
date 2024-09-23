import React,{useState,useEffect} from 'react'
import 'assets/css/header.css'
import {NavLink,Link} from 'react-router-dom'
import Search from './Search';
import BurgerMenu from './BurgerMenu';

function Header(){
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header id ="header" className="header">
            <div className="header_wrap">
                <h1><NavLink to="/"><img src={require("assets/images/header/logo-red.svg").default} alt="코카콜라 컴퍼니" /></NavLink></h1>
                <nav className="nav">                    
                <ul className="gnb">
                    <li><NavLink to="/brand">코카-콜라 제품</NavLink></li>
                    <li>
                        <Link to="/since">코카-콜라 역사</Link>
                        <ul className='snb'>
                            <li><NavLink to="company">코카콜라 컴퍼니</NavLink></li>
                            <li><NavLink to="since">since 1886</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/story">브랜드 스토리</NavLink>
                    </li>
                    <li>
                        <Link to="/sustainability">사회적 가치</Link>
                        <ul className='snb'>
                            <li><NavLink to="sustainability">지속가능성</NavLink></li>
                            <li><NavLink to="social">사회환원</NavLink></li>
                        </ul>
                    </li>
                </ul>
                </nav>
                <Search/>
                {isMobile && <BurgerMenu />} 
            </div>
        </header>
    )
}

export default Header