import React from 'react'
import 'assets/css/template.css'

function Card() {
    return (
        <div className="basic-card-section">
            <div className="card-wrap">
                <div className="card-img">
                    <img src="https://placehold.co/413x232" alt="임시이미지" />
                </div>
                <div className="card-text">
                    <h3>컨텐츠 이름</h3>
                    <p>컨텐츠 내용</p>
                </div>
                <div className='more-btn'><a href="#none">더보기</a></div>
            </div>
        </div>
    );
}

export default Card;