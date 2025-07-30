import { createContext, useState } from 'react';
import WorldFlag from 'react-world-flags';
import LocaleCodes from 'locale-codes'
import langToCountries from '../languageDataMap';

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [search, setSearch] = useState('');
    const [films, setFilms] = useState([]);
    const [series, setSeries] = useState([]);
    const apiKey = import.meta.env.VITE_SOME_KEY;

    function handleSearchMovie(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`)
        .then(res => res.json())
        .then(data =>{
            setFilms(data.results)
        })
        .catch(err => console.error(err));
    }

    function handleSearchSerie(){
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${search}`)
        .then(res => res.json())
        .then(data => {
            setSeries(data.results)
        })
        .catch(err => console.error(err));
    }

    function getFlag(language){
        const countries = langToCountries[language];
        const stateCode = countries?.[0]

        return(
        <WorldFlag code={stateCode} fallback={<span>{stateCode}</span>} style={{ width: 30, height: 20 }}></WorldFlag>
        )
    }

    function getStars(vote) {
        const fullStars = Math.round(vote / 2);
        const emptyStars = 5 - fullStars;

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
        stars.push(<i className="bi bi-star-fill text-warning me-1"></i>);
        }

        for (let i = 0; i < emptyStars; i++) {
        stars.push(<i className="bi bi-star-fill text-muted me-1"></i>);
        }

        return <>{stars}</>;
    }




    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch,
                films,
                series,
                handleSearchMovie,
                handleSearchSerie,
                getFlag,
                getStars
            }}
            >
            {children}
        </SearchContext.Provider>
    );
}
