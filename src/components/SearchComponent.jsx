import { useContext, useEffect } from 'react';
import { SearchContext } from '../contexts/SearchContext';

export default function SearchComponent({ type }) {
    const {
        search,
        setSearch,
        handleSearchMovie,
        handleSearchSerie,
        filmGenres,
        serieGenres,
        selectedFilmGenres,
        selectedSerieGenres,
        toggleSelectedFilmGenre,
        toggleSelectedSerieGenre
    } = useContext(SearchContext);

    useEffect(() => {
        if (type === 'movie'){ 
            handleSearchMovie()
        }

        else if (type === 'serie'){ 
            handleSearchSerie()
        }
    }, [search]);

    // Reset search change film/serie
    useEffect(() => {
        setSearch('');
    }, [type]);

    const genres = type === 'movie' ? filmGenres : serieGenres;
    const selectedGenres = type === 'movie' ? selectedFilmGenres : selectedSerieGenres;
    const toggleGenre = type === 'movie' ? toggleSelectedFilmGenre : toggleSelectedSerieGenre;

  return (
    <div className="mb-4">
      {/* Search input */}
      <input className="form-control mb-3" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={`Cerca ${type === 'movie' ? 'film' : 'serie'}...`} aria-label="Cerca" />

      {/* genres checkbox */}
      <div className="row">
        {genres.map((genre) => (
          <div key={genre.id} className="col-6 col-md-4 col-lg-3 mb-2">
            <div className="form-check text-white">
              <input className="form-check-input" type="checkbox" id={`genre-${genre.id}`} checked={selectedGenres.includes(genre.id)} onChange={() => toggleGenre(genre.id)} />
              <label className="form-check-label" htmlFor={`genre-${genre.id}`}>
                {genre.name}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
