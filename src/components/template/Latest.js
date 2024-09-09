import React from 'react'
import 'assets/css/template.css'

function Latest() {
    return (
        <div className="latest-section">
            <div className="latest-wrap">
                <div className="latest-title">
                    <h2>최신 컨텐츠</h2>
                    <h3>컨텐츠 큰 제목</h3>
                    <p>컨텐츠 내용</p>
                </div>
                <div className="latest-img">
                    <img src="https://placehold.co/413x232" alt="임시이미지" />
                </div>
                <div className="latest-cont">
                    <div className="cont-wrap">
                        <span>EP. 01</span>
                        <p>영상 제목</p>
                    </div>
                    <button type='button'>영상보기</button>
                </div>
            </div>
        </div>
    );
}

export default Latest;