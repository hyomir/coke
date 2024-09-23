import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'assets/css/header.css';

function SearchBox({ value, onChange, filteredData }) {
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const term = e.target.value;
        onChange(term); // 상위 컴포넌트의 상태 업데이트
        setShowResults(term.length > 0);
    };

    const handleResultClick = (id) => {
        navigate(`/result/${id}`);
    };

    return (
        <div id="searchBox" className="search">
            <form name="search" action="" method="get">
                <input
                    type="search"
                    placeholder="검색하기"
                    value={value}
                    onChange={handleInputChange}
                />
                {showResults && (
                        <ul className='search-result'>
                            {filteredData && filteredData.length > 0 ? (
                                filteredData.map(item => (
                                    <li key={item.id} onClick={() => handleResultClick(item.id)}>
                                        <h4>{item.title}</h4>
                                    </li>
                                ))
                            ) : (
                                <p>결과를 찾고 있습니다.</p>
                            )}
                        </ul>
                )}
                <button type='button'></button>
            </form>
        </div>
    );
}

export default SearchBox;
