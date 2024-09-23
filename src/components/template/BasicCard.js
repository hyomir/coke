import React from 'react'
import 'assets/css/template.css'
import {Link} from 'react-router-dom'

function Card({title,desc,img_url}) {
    return (
        <div className="basic-card-section">
            <Link>
            <div className="card-wrap">
                <div className="card-img">
                {img_url && <img src={`/images/${img_url}`} alt={title} />}
                </div>
                <div className="card-text">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
                <button className='more-btn'>더보기</button>
            </div>
            </Link>
        </div>
    );
}

export default Card;