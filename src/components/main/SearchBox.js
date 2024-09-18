import React from 'react'
import 'assets/css/header.css'

function SearchBox({value,onChange}){
    return (
        <div id="searchBox" className="search">
        <form name="search" action="" method="get">
            <input type="search"
            placeholder="검색하기"
            value={value}
            onChange ={onChange}
            />
            <button type='button'></button>
        </form>
    </div>
    )
}

export default SearchBox;