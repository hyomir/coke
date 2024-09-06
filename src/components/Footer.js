import React from 'react'
import "../assets/css/footer.css"

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer_wrap">
                <div>
                    <h2>로고</h2>
                    <div id="google_translate_element" className='translate'></div>
                </div>
                <div>
                    <ul className="fnb">
                        {/* 추후 라우터 설정 */}
                        <li>
                            <p><span>소개</span></p>
                            <ul>
                                <li><a href="#none">기업소개</a></li>
                                <li><a href="#none">히스토리</a></li>
                                <li><a href="#none">채용</a></li>
                            </ul>
                        </li>
                        <li>
                            <p><span>헬프센터</span></p>
                            <ul>
                                <li><a href="#none">사이트 맵</a></li>
                                <li><a href="#none">고객안내</a></li>
                            </ul>
                        </li>
                        <li>
                            <p><span>법적고지</span></p>
                            <ul>
                                <li><a href="#none">이용약관</a></li>
                                <li><a href="#none">쿠키정책</a></li>
                                <li><a href="#none">쿠키설정</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="sns">
                        <li><a href="#none">유투브</a></li>
                        <li><a href="#none">X</a></li>
                        <li><a href="#none">인스타그램</a></li>
                        <li><a href="#none">페이스북</a></li>
                    </ul>
                </div>
                <p className='copy'>&copy;The Coca-Cola Compony. 판권소유</p>
            </div>
        </footer>
    )
}

export default Footer