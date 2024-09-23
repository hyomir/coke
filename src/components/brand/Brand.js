import React,{useState} from "react";
import "assets/css/brand.css";
import Sns from "components/template/Sns";
import DB from "data/data.json"
import BrandListMenu from "./BrandListMenu";
import BrandList from "./BrandList";
const brandData = DB.brand
function Brand(){
    const [item,setItems] = useState(brandData);
    const brandList =[...new Set(brandData.map((item)=>item.type))]
    const filterItem = (curBrand) => {
        const newItem = brandData.filter((newVal) => {
        return newVal.type === curBrand;
        });
        setItems(newItem);
    };
    const allItem = brandData.map((item)=>item)

    return (
        <section className="brand">
            <h2>코카 - 콜라 제품</h2>
            <p>{item.length}개의 브랜드</p>
            <BrandListMenu setItems={setItems} brandList={brandList} filterItem={filterItem} allItem={allItem} />
            <BrandList item={item} />
            <Sns></Sns>
        </section>
    );
}

export default Brand;
