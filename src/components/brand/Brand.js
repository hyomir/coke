import React,{useState,useEffect} from "react";
import "assets/css/brand.css";
import Sns from "components/template/Sns";
import brandData from "data/brandData.json"
import BrandListMenu from "./BrandListMenu";
import BrandList from "./BrandList";

function Brand(){
    const [item,setItems] = useState(brandData);
    const brandList =[...new Set(brandData.map((item)=>item.type))]
    const filterItem = (curBrand) => {
        console.log("선택된 브랜드:", curBrand);
        const newItem = brandData.filter((newVal) => {
        return newVal.type === curBrand;
        });
        setItems(newItem);
    };
    const allItem = brandData.map((item)=>item)
    useEffect(() => {
        console.log("현재 필터링된 아이템:", item);
    }, [item]); // item이 변경될 때마다 로그 출력

    return (
        <section className="brand">
            <h2>코카 - 콜라 제품</h2>
            <p>items : {item.length}</p>
            <BrandListMenu setItems={setItems} brandList={brandList} filterItem={filterItem} allItem={allItem} />
            <BrandList item={item} />
            <Sns></Sns>
        </section>
    );
}

export default Brand;
