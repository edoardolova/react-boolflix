export default function FilmList({films, getFlag, getStars}){
    return(
        <div className='mb-5'>
          <div  className="row gy-3">
            {films.map((film) => (
              <div className="col-6 col-md-4 col-lg-3">
                <div class="card text-bg-dark h-100">
                  <img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`}  class="card-img"  alt={film.original_title}/>
                  <div class="card-img-overlay">
                    <h5 class="card-title mb-3">{film.title}</h5>
                        <p className="card-text mb-2">{`Titolo: ${film.title}`}</p>
                        <p className="card-text mb-2">{`Titolo originale: ${film.original_title}`}</p>
                        <p className="card-text mb-2">Lingua: {getFlag(film.original_language)}</p>
                        <p className="card-text mb-2">Voto: {getStars(film.vote_average)}</p>
                        <p className="card-text mb-2">Trama: {film.overview.slice(0, 100) + '...'}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
    )
  }
