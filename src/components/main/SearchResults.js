import React from 'react';
import 'assets/css/header.css'

function SearchResults({ results = [] }) {
    return (
        <ul className='result-tab'>
            {results.map(item => (
                <li key={item.id}>
                    <h4 className='result-title'>{item.title}</h4>
                </li>
            ))}
        </ul>
    );
}

export default SearchResults;
