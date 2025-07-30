import { useContext, useEffect } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import SerieList from '../components/SerieList';

export default function SeriePage(){
    const { series, getFlag, getStars } = useContext(SearchContext);
    return (
        <div className="mb-5 container">
            <h1 className="text-white mb-4">Quale serie vorresti vedere</h1>
            <SerieList series={series} getFlag={getFlag} getStars={getStars} />
        </div>
    )
}