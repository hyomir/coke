import React from 'react'
import 'assets/css/template.css'

function SNS() {
    return (
        <div className="sns-section">
            <div className="sns-wrap">
                <div className="sns_text">
                    <p>다양한 곳에서 코카-콜라를 만나보세요.</p>
                    <ul>
                    <li><a href="#none"><img src={require("assets/images/footer/youtube-white.svg").default} alt="유투브"/></a></li>
                        <li><a href="#none"><img src={require("assets/images/footer/twitter-white.svg").default} alt="트위터"/></a></li>
                        <li><a href="#none"><img src={require("assets/images/footer/instagram-white.svg").default} alt="인스타그램"/></a></li>
                        <li><a href="#none"><img src={require("assets/images/footer/facebook-white.svg").default} alt="페이스북"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SNS;