import React from "react";
import "assets/css/brand.css";

function BrandListMenu({filterItem,setItems,brandList,allItem}){
    return (
            <ul className="psb">
                <li onClick={()=>setItems(allItem)}><p>모든 제품</p></li>
                {brandList.map((type,id)=>{
                    return(
                        <li 
                        onClick={()=>filterItem(type)}
                        key={id}>
                            <p>{type}</p>
                            </li>
                    )
                })}
            </ul>
    );
}

export default BrandListMenu;
