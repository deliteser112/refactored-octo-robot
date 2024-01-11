import React, { useState } from 'react';
import api from '../utils/api';

const Search: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = async () => {
        try {
            const response = await api.get('/search/movie', {
                params: {
                    query,
                },
            });
            setResults(response.data.results);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
