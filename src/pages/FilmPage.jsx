import { useContext, useEffect } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import FilmList from '../components/FilmList';

export default function FilmPage(){
    const { films, getFlag, getStars } = useContext(SearchContext);
    return(
      <div className="container">
        <h1 className='text-white mb-4'>Quale film vorresti vedere</h1>
        <FilmList films={films} getFlag={getFlag} getStars={getStars} />

      </div>
    )
}