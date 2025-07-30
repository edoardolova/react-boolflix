import { useContext } from 'react';
import { SearchContext } from "../contexts/SearchContext";
import { NavLink } from 'react-router-dom';

export default function Header() {
    const { search, setSearch, handleSearchMovie, handleSearchSerie } = useContext(SearchContext);
    function handleSearch(){
        handleSearchMovie();
        handleSearchSerie();
    }
    return (
        <header className="mb-4">
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="../../public/logo.png" alt="Bootstrap" ></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <NavLink className="nav-link  text-light fs-5 ms-auto me-3" to="/" aria-current="page">Home</NavLink>
                        <NavLink className="nav-link text-light fs-5 me-3" to="/films">Film</NavLink>
                        <NavLink className="nav-link  text-light fs-5 me-auto" to="/series">Serie</NavLink>
                    </div>
                </div>
            </nav>

        </header>
    );
}

