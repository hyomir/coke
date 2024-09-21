import React from "react";
import "assets/css/brand.css";
import brandData from "data/brandData.json";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const brandDetail = brandData.find((item) => item.id === Number(id));

    return(
        <div className="detail">
            <h2>상세 페이지</h2>
            {brandDetail ? (
                <>
                    <h3>{brandDetail.name}</h3>
                    <img src={`/images/brand/${brandDetail.img}`} alt={brandDetail.name} />
                </>
            ) : (
                <p>브랜드 정보를 찾을 수 없습니다.</p>
            )}
        </div>
)
}

export default Detail;
