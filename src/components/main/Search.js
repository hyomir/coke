import React, { useState } from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import DB from 'data/data.json';

const data = DB.content;

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term.length > 0) {
            const results = data.filter(item =>
                (item.title && item.title.toLowerCase().includes(term.toLowerCase())) ||
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
            <SearchResults results={filteredData} />
        </div>
    );
}

export default Search;
