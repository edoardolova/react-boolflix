
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <header className="mb-4">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="../../public/logo.png" alt="Bootstrap" ></img>
                    </a>
                    <button style={{backgroundColor:'white'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <NavLink className="nav-link px-3 py-1  text-light  fs-5 ms-auto me-5" to="/" aria-current="page">Home</NavLink>
                        <NavLink className="nav-link px-3 py-1 text-light  fs-5 me-5" to="/films">Film</NavLink>
                        <NavLink className="nav-link px-3 py-1  text-light  fs-5 me-auto" to="/series">Serie</NavLink>
                    </div>
                </div>
            </nav>

        </header>
    );
}

