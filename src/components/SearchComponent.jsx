import { useContext, useEffect } from 'react';
import { SearchContext } from '../contexts/SearchContext';

export default function SearchComponent({ type }) {
    const { search, setSearch, handleSearchMovie, handleSearchSerie } = useContext(SearchContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (type === 'movie') {
        handleSearchMovie();
        } 
        else if (type === 'serie') {
        handleSearchSerie();
        }
    }

    useEffect(() => {
        if (type === 'movie') {
            handleSearchMovie();
        } else if (type === 'serie') {
            handleSearchSerie();
        }

    }, [search]); 

    useEffect(() => {
        setSearch('');
    }, [type]);

    return (
        <form className="d-flex mb-4" role="search" onSubmit={handleSubmit}>
        <input
            className="form-control me-2"
            type="search"
            placeholder={`Cerca ${type === 'movie' ? 'film' : 'serie'}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
        />
        </form>
    );
}
