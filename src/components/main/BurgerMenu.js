import React, { useState, useEffect } from 'react';
import {NavLink,Link} from 'react-router-dom';


const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false); // 화면 크기가 768px 이상이면 메뉴 닫기
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hamburger-menu">
      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>
      {isOpen && (
        <nav className="menu">
            <ul className="gnb">
                        <li><NavLink to="/brand">코카-콜라 제품</NavLink></li>
                        <li onClick={toggleSubMenu}>
                        <Link>코카-콜라 역사 {subMenuOpen ? '▼' : '►'}</Link>
                            <ul className={`sub ${subMenuOpen ? 'open' : ''}`}>
                                <li><NavLink to="company">코카콜라 컴퍼니</NavLink></li>
                                <li><NavLink to="since">since 1886</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/story">브랜드 스토리</NavLink>
                        </li>
                        <li>
                        <Link>사회적 가치{subMenuOpen ? '▼' : '►'}</Link>
                            <ul className={`sub ${subMenuOpen ? 'open' : ''}`}>
                                <li><NavLink to="sustainability">지속가능성</NavLink></li>
                                <li><NavLink to="social">사회환원</NavLink></li>
                            </ul>
                        </li>
                    </ul>
        </nav>
    )}
    </div>
);
};

export default BurgerMenu;
