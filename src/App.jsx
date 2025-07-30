
import LocaleCodes from 'locale-codes'


import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilmPage from './pages/FilmPage';
import HomePage from './pages/HomePage';
import SeriePage from './pages/SeriePage';
import DefaultLayout from './layouts/DefaultLayout';
import SearchProvider from './contexts/SearchContext';

function App() {
  return (
    <>
      {
        <SearchProvider>
          <BrowserRouter>
            <Routes>
              <Route Component={DefaultLayout}>
                <Route path='/' Component={HomePage}/>
                <Route path='/films' Component={FilmPage}/>
                <Route path='/series' Component={SeriePage}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </SearchProvider>
      }
    </>
  )
}

export default App
