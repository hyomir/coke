import React from 'react'
import '../assets/css/header.css'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            <header id ="header" className="header">
                <div className="header_wrap">
                    <h1>
                        <NavLink to="/">로고</NavLink>
                    </h1>
                    <nav>
                        <ul className="gnb">
                            <li>
                                <NavLink to="/brand">코카-콜라 제품</NavLink>
                            </li>
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
                    <div className="search">
                        {/* action 추가 */}
                        <form>
                            <input type="text" />
                            <button type='button'><p>찾기</p></button>
                        </form>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header