import React from 'react'
import 'assets/css/template.css'
import BtnArr from 'components/template/BtnArr'

function LineCard({title,img_url,desc}){
    return (
        <div className="line-card-section">
            <div className="line-card-wrap">
                <div className="deco-cont"></div>
                <div className="line-card-content">
                    <div className="card-img">
                    {img_url && <img src={`/images/${img_url}`} alt={title} />}
                    </div>
                    <div className="card-text">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                    <div class="btn-wrap">
                        <BtnArr></BtnArr>
                    </div>
                </div>
            <div className="deco-text"></div>
            </div>
        </div>
    );
}

export default LineCard;