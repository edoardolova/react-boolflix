import { useContext, useEffect } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import FilmList from '../components/FilmList';
import SearchComponent from '../components/SearchComponent';

export default function FilmPage(){
    const { films, getFlag, getStars } = useContext(SearchContext);
    return(
      <div className="container">
        <SearchComponent type="movie" />
        <h1 className='text-white mb-4'>Quale film vorresti vedere</h1>
        <FilmList films={films} getFlag={getFlag} getStars={getStars} />

      </div>
    )
}