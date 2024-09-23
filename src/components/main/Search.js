import React, { useState } from 'react';
import SearchBox from './SearchBox';
import DB from 'data/data.json';

const data = [...DB.content,...DB.history,...DB.social,...DB.brand];

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term.length > 0) {
            const results = data.filter(item =>
                (item.title && item.title.toLowerCase().includes(term.toLowerCase())) ||
                (item.desc && item.desc.toLowerCase().includes(term.toLowerCase())) ||
                (item.cont && item.cont.toLowerCase().includes(term.toLowerCase()))
            );
            setFilteredData(results);
        } else {
            setFilteredData([]);
        }
    };

    return (
        <div>
            <SearchBox value={searchTerm} onChange={handleSearch} filteredData={filteredData} />
        </div>
    );
}

export default Search;
