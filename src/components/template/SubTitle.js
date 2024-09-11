import React from 'react'
import 'assets/css/template.css'

function SubTitle() {
    return (
        <div className="subtitle-section">
            <div className="subtitle-wrap">
                <div className="sub-img"></div>
                <div className="sub-text">
                    <h3>SubTitle</h3>
                    <p>이곳은 글의 설명이 들어가는 곳</p>
                    <a className='more-btn' href="#none">바로가기</a>
                </div>
            </div>
        </div>
    );
}

export default SubTitle;