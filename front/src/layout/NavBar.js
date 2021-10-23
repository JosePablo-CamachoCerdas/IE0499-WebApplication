import React from "react";
import "./NavBar.css"

const NavBar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light navi">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://accionsocial.ucr.ac.cr/sites/default/files/herramienta/imagenes/2020-12/firma-vertical-dos-lineas-negro.png" alt="" width="120" height="100"></img>
                        Prueba Aptitud Académica
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav mr-auto">
                            <ul className="navbar-nav mr-auto mb-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" aria-current="page" href="#">PAA</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Práctica</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Preguntas</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Contactenos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Perfil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>  
            </nav>
        </div>
    )
}

export default NavBar;