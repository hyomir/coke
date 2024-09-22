import React from 'react'
import 'assets/css/template.css'

function Card({title,desc,img_url}) {
    return (
        <div className="basic-card-section">
            <div className="card-wrap">
                <div className="card-img">
                {img_url && <img src={`/images/brand/${img_url}`} alt={title} />}
                </div>
                <div className="card-text">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
                <div className='more-btn'><a href="#none">더보기</a></div>
            </div>
        </div>
    );
}

export default Card;