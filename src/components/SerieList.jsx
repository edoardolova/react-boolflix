export default function SerieList({ series, getFlag, getStars }) {
  return (
    <div className="mb-5">
      <div className="row gy-4">
        {series.map((serie) => (
          <div className="col-6 col-md-4 col-lg-3" key={serie.id} style={{height:'300px'}}>
            <div className="flip-card h-100">
              <div className="flip-card-inner">
                
                <div className="flip-card-front">
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                    className="card-img"
                    alt={serie.original_name}
                  />
                </div>
                
                <div className="flip-card-back text-bg-dark p-3">
                  <h5 className="card-title mb-3">{serie.name}</h5>
                  <p className="card-text mb-2">Titolo originale: {serie.original_name}</p>
                  <p className="card-text mb-2">Lingua: {getFlag(serie.original_language)}</p>
                  <p className="card-text mb-2">Voto: {getStars(serie.vote_average)}</p>
                  <p className="card-text mb-2">Trama: {serie.overview.slice(0, 100) + '...'}</p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
