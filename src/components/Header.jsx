import { useContext } from 'react';
import { SearchContext } from "../contexts/SearchContext";

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
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <form class="d-flex ms-auto" role="search">
                        <input class="form-control me-2" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-danger" type="button" onClick={handleSearch}>Search</button>
                    </form>
                    </div>
                </div>
            </nav>

        </header>
    );
}

