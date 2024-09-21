import React from "react";
import "assets/css/brand.css";
import {Link} from "react-router-dom"

function BrandList({item}){
    return (
            <div className="product">
                <ul className="brands_list">
                    {item.map((brands)=>
                        <li key={brands.id}>
                            <Link to={`/brand/detail/${brands.id}`}>
                                <div className="brand">
                                    <img src={`/images/brand/${brands.img}`} alt={brands.name} />
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
    );
}

export default BrandList;
