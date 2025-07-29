import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [films, setFilms] = useState([])
  const apiKey =(import.meta.env.VITE_SOME_KEY)


  function handleSearch(){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`)
      .then(res => res.json())
      .then(data => setFilms(data.results))
      .catch(err => console.error(err))
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
        <ul className="list-group">
          {films.map((film) => (
              <li className="list-group-item" key={film.id}>
                <p>{`Titolo: ${film.title}`}</p>
                <p>{`Titolo originale: ${film.original_title}`}</p>
                <p>{`Lingua: ${film.original_language}`}</p>
                <p>{`Voto: ${film.vote_average}`}</p>
              </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
