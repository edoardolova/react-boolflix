import { useEffect, useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import FilmList from '../components/FilmList';
import SerieList from '../components/SerieList';

export default function HomePage() {
  const {

    trendFilms,
    trendPeople,
    trendSeries,
    handleSearchTrendFilms,
    handleSearchTrendPeoples,
    handleSearchTrendSeries,
    getFlag,
    getStars
  } = useContext(SearchContext);

  useEffect(() => {
    handleSearchTrendFilms();
    handleSearchTrendSeries();
    handleSearchTrendPeoples();
  }, []);

  return (
    <div className="container">
      <h2 className="text-white mb-4">Film Popolari</h2>
      <FilmList films={trendFilms} getFlag={getFlag} getStars={getStars} />

      <h2 className="text-white mb-4 mt-5">Serie Popolari</h2>
      <SerieList series={trendSeries} getFlag={getFlag} getStars={getStars} />

      <h2 className="text-white mb-4 mt-5">Attori Popolari</h2>
      <div className="row gy-3">
        {trendPeople.map((person) => (
            <div className="col col-md-4 col-lg-3">
                <div class="card text-bg-dark h-100">
                  <img src={`https://image.tmdb.org/t/p/w342/${person.profile_path}`}  class="card-img"  alt={person.name}/>
                  <div class="card-img-overlay">
                    <h4 class="card-title mb-3">{person.name}</h4>
                        <p className="card-text mb-2">{`Original: ${person.original_name}`}</p>
                        <p className="card-text mb-2">Ruolo: {person.known_for_department}</p>
                  </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
