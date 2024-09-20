import React from 'react'
import 'assets/css/template.css'

function Card({title,content}) {
    return (
        <div className="basic-card-section">
            <div className="card-wrap">
                <div className="card-img">
                    <img src="https://placehold.co/413x232" alt="임시이미지" />
                </div>
                <div className="card-text">
                    <h4>{title}</h4>
                    <p>{content}</p>
                </div>
                <div className='more-btn'><a href="#none">더보기</a></div>
            </div>
        </div>
    );
}

export default Card;