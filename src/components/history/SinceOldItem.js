import React from "react";
import "assets/css/since.css";
import {Link} from 'react-router-dom'

function SinceOldItem({item}){
    return (
        <li className="cont">
            <Link>
                {item.img_url && <img src={process.env.PUBLIC_URL +`/images/${item.img_url}`} alt={item.title} />}
                <div className="cont_text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
            </Link>
        </li>
    );
}

export default SinceOldItem;
