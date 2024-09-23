import React from 'react';

function SearchResults({ results = [] }) {
    return (
        <ul>
            {results.map(item => (
                <li key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.cont}</p>
                </li>
            ))}
        </ul>
    );
}

export default SearchResults;
