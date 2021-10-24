import React from "react";
import "./NavBar.css"
import { isAuthenticated, logout } from "../core/apiCore";

const NavBar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light navi">
                <div className="container-fluid">
                    <a class="navbar-brand">
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
                            <ul className="navbar-nav mr-auto">
                            {!isAuthenticated() && (
                                <>
                                    <li className="nav-item active">
                                        <a className="nav-link" aria-current="page" href="#">PAA</a>
                                    </li>
                                    <li className="nav-item navitemf">
                                        <a className="nav-link" href="#">Fechas importantes</a>
                                    </li>
                                </>
                            )}
                            {isAuthenticated() && (
                                <>
                                    <li className="nav-item active">
                                        <a className="nav-link" aria-current="page" href="#">PAA</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Administración PAA</a>
                                    </li>
                                </>
                            )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container justify-content-end">
                    <ul className="navbar-nav">
                        {!isAuthenticated() && (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/signup">Registrarse</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Iniciar Sesión</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contactenos</a>
                                </li>
                            </>
                        )}
                        {isAuthenticated() && (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Perfil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" 
                                        onClick={() => 
                                            logout(() => {
                                                window.history.push("/");
                                        })} href="/login">Cerrar sesión</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contactenos</a>
                                </li>
                            </>
                        )}
                        
                    </ul>
                </div>  
            </nav>
        </div>
    )
}

export default NavBar;