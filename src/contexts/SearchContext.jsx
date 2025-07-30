import { createContext, useState } from 'react';
import WorldFlag from 'react-world-flags';
import LocaleCodes from 'locale-codes'
import langToCountries from '../languageDataMap';

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const apiKey = import.meta.env.VITE_SOME_KEY;
    const [search, setSearch] = useState('');
    const [films, setFilms] = useState([]);
    const [series, setSeries] = useState([]);
    // trending 
    const [trendFilms, setTrendFilms] = useState([]);
    const [trendPeople, setTrendPeople] = useState([]);
    const [trendSeries, setTrendSeries] = useState([]);

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
    function handleSearchTrendFilms(){
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            setTrendFilms(data.results)
        })
        .catch(err => console.error(err));
    }
    function handleSearchTrendPeoples(){
        fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            setTrendPeople(data.results)
        })
        .catch(err => console.error(err));
    }
    function handleSearchTrendSeries(){
        fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            setTrendSeries(data.results)
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
                trendFilms,
                trendPeople,
                trendSeries,
                handleSearchMovie,
                handleSearchSerie,
                handleSearchTrendFilms,
                handleSearchTrendPeoples,
                handleSearchTrendSeries,
                getFlag,
                getStars
            }}
            >
            {children}
        </SearchContext.Provider>
    );
}
