import React from "react";
import "assets/css/brand.css";

function BrandList({item}){
    return (
            <div className="product">
                <ul className="brands_list">
                    {item.map((brands)=>
                        <li key={brands.id}>
                            <a href="#none">
                                <div className="brand">
                                    <img src={`/images/brand/${brands.img}`} alt={brands.name} />
                                </div>
                            </a>
                    </li>
                    )}
                </ul>
            </div>
    );
}

export default BrandList;
