import React from 'react';

function SearchResults({ results = [] }) {
    return (
        <ul>
            {results.map(item => (
                <li key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.cont}</p>
                </li>
            ))}
        </ul>
    );
}

export default SearchResults;
