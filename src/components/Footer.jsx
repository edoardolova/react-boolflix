export default function Footer() {
    return (
        <footer className="text-white py-4 mt-auto">
            <div className="container text-center">

                <h5 className="mb-4 text-uppercase">Iscriviti alla nostra newsletter</h5>

                <ul className="list-unstyled d-flex justify-content-center flex-wrap mb-4 gap-3">
                    <li>
                        <a href="#" className=" text-decoration-none">
                            <i className="bi bi-facebook fs-4"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className=" text-decoration-none">
                            <i className="bi bi-instagram fs-4"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className=" text-decoration-none">
                            <i className="bi bi-tiktok fs-4"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className=" text-decoration-none">
                            <i className="bi bi-twitter-x fs-4"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className=" text-decoration-none">
                            <i className="bi bi-spotify fs-4"></i>
                        </a>
                    </li>

                </ul>

                <ul className="list-unstyled d-flex justify-content-center flex-wrap mb-4 gap-3 small">
                    <li><a href="#" className=" text-decoration-none">Cookie settings</a></li>
                    <li><a href="#" className=" text-decoration-none">Privacy e Cookie</a></li>
                    <li><a href="#" className=" text-decoration-none">Termini e condizioni</a></li>
                </ul>

                <p className="text-white-50 small mb-0">
                    BOOLFLIX S.R.L. - Sede legale: Via del Cinema 101, 20100 Roma, Italia C.F. e P.IVA: 12345678901 - Registro Imprese RM - REA: RM-1234567
                </p>
            </div>
        </footer>
    );
}
