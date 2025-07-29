import { useEffect, useState } from 'react'
import WorldFlag from 'react-world-flags';
import LocaleCodes from 'locale-codes'


import './App.css'
import localeCodes from 'locale-codes';

function App() {
  const [search, setSearch] = useState('')
  const [films, setFilms] = useState([])
  const [series, setSeries] = useState([])
  const apiKey =(import.meta.env.VITE_SOME_KEY)


  function handleSearch(){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`)
    .then(res => res.json())
    .then(data => setFilms(data.results))
    .catch(err => console.error(err));

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${search}`)
    .then(res => res.json())
    .then(data => setSeries(data.results))
    .catch(err => console.error(err));
  }

  // function getFlag(language){
  //   const stateCode = LocaleCodes.all.find((element)=> element.tag === language)['iso639-2'];
  //   return(
  //     <WorldFlag code={stateCode} fallback={<span>{stateCode}</span>} style={{ width: 30, height: 20 }}></WorldFlag>
  //   )
  // }
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
    <>
      <div className="container">
        <h1>BOOLFLIX</h1>
        <div className='search-div d-flex'>
          <div className="form-floating mb-3">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="Search"/>
            <label htmlFor="floatingInput">Search</label>
          </div>
          <div className="btn" onClick={handleSearch}>Cerca</div>
        </div>
        <div className='mb-5'>
          <h2>FILM</h2>
          <ul className="list-group">
            {films.map((film) => (
                <li className="list-group-item" key={film.id}>
                  <img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`}  alt={film.original_title} />
                  <p>{`Titolo: ${film.title}`}</p>
                  <p>{`Titolo originale: ${film.original_title}`}</p>
                  <p>Lingua: <WorldFlag code={film.original_language} fallback={<span>{film.original_language}</span>} style={{ width: 30, height: 20 }}/></p>
                  {/* <p>Lingua: {getFlag(film.original_language)}</p> */}
                  <p>Voto: {getStars(film.vote_average)}</p>
                </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>SERIE TV</h2>
          <ul className="list-group">
            {series.map((serie) => (
                <li className="list-group-item" key={serie.id}>
                  <img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}  alt={serie.original_name} />
                  <p>{`Titolo: ${serie.name}`}</p>
                  <p>{`Titolo originale: ${serie.original_name}`}</p>
                  <p>Lingua: <WorldFlag code={serie.original_language} fallback={<span>{serie.original_language}</span>} style={{ width: 30, height: 20 }}/></p>
                  <p>Voto: {getStars(serie.vote_average)}</p>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
