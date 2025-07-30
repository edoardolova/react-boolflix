import { useContext, useEffect } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import FilmList from '../components/FilmList';
import SearchComponent from '../components/SearchComponent';

export default function FilmPage(){
    const { films, getFlag, getStars, filmGenres } = useContext(SearchContext);
    console.log(filmGenres)
    return(
      <div className="container">
        <h1 className='text-white mb-4'>Quale film vorresti vedere</h1>
        <SearchComponent type="movie" />
        <FilmList films={films} getFlag={getFlag} getStars={getStars} />

      </div>
    )
}