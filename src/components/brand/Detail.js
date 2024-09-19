import React from "react";
import "assets/css/brand.css";
import { useParams } from "react-router-dom";


function Detail(props){
    let {id} = useParams();
    <article className="brands-detail">
        <p>{props.item[id].name}</p>
    </article>
}

export default Detail;
