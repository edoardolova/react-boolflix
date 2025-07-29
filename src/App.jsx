import { useEffect, useState } from 'react'
import WorldFlag from 'react-world-flags';


import './App.css'

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
                  <p>{`Titolo: ${film.title}`}</p>
                  <p>{`Titolo originale: ${film.original_title}`}</p>
                  <p>Lingua: <WorldFlag code={film.original_language} fallback={<span>{film.original_language}</span>} style={{ width: 30, height: 20 }}/></p>
                  <p>{`Voto: ${film.vote_average}`}</p>
                </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>SERIE TV</h2>
          <ul className="list-group">
            {series.map((serie) => (
                <li className="list-group-item" key={serie.id}>
                  <p>{`Titolo: ${serie.name}`}</p>
                  <p>{`Titolo originale: ${serie.original_name}`}</p>
                  <p>Lingua: <WorldFlag code={serie.original_language} fallback={<span>{serie.original_language}</span>} style={{ width: 30, height: 20 }}/></p>
                  <p>{`Voto: ${serie.vote_average}`}</p>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
