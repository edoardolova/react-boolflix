export default function FilmList({films, getFlag, getStars}){
    return(
        <div className='mb-5'>
          <div  className="row gy-4">
            {films.map((film) => (
              <div className="col-6 col-md-4 col-lg-3" style={{height:'300px'}}>
                <div className="flip-card h-100">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`} className="card-img" alt={film.original_title}/>
                    </div>
                    <div className="flip-card-back text-bg-dark p-3">
                      <h5 className="card-title mb-3">{film.title}</h5>
                      <p className="card-text mb-2">{`Titolo originale: ${film.original_title}`}</p>
                      <p className="card-text mb-2">Lingua: {getFlag(film.original_language)}</p>
                      <p className="card-text mb-2">Voto: {getStars(film.vote_average)}</p>
                      <p className="card-text mb-2">Trama: {film.overview.slice(0, 100) + '...'}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
            </div>
        </div>
    )
  }
