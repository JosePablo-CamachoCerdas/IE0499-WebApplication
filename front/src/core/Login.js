import React, { useState, useEffect } from "react";
import NavBar from "../layout/NavBar";
import { login, authenticate, isAuthenticated } from "./apiCore";
import { Redirect } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const {email, password, loading, error, redirectToReferrer} = values;
    const {user} = isAuthenticated();
    const handleChange = name => event => {
        setValues({...values, error:false, [name]: event.target.value})
    }
    
    const clickSubmit = (event) => {
        event.preventDefault(); // Don't send info if not full
        setValues({...values, error:false, loading: true}) // When values assigned, loading to true
        login({email, password}) // With login method, send email and password
            .then(data => {
                if(data.error) {
                    setValues({...values, error: data.error, loading: false}) // If error with passong data, set loading to false
                } else {
                    authenticate(
                        data, () => {
                            setValues({
                                ...values,
                                redirectToReferrer: true
                            })
                        }
                    )
                }
            })
    }

    const logInForm = () => (
        <form>
          <div className="form-group mb-3 mt-3">
            <label for="exampleInputEmail1" className="mb-2">Email</label>
            <input onChange={handleChange('email')} type="email" className="mb-1 form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tu email"/>
            <small id="emailHelp" className="form-text text-muted">Tu información no es compartida con terceros.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" className="mb-2">Contraseña</label>
            <input onChange={handleChange('password')} type="password" class="form-control" value={password} id="exampleInputPassword1" placeholder="Tu contraseña"/>
          </div>
          <button onClick={clickSubmit} type="submit" class="btn btn-secondary mt-3">Iniciar sesión</button>
        </form>
    )

    const redirectUser = () => {
        if(redirectToReferrer) {
            if(user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/" />
            }
        }
            if(isAuthenticated()) {
                return <Redirect to="/homeuser" />
            }
    }

    const showError = () => (
        <div className="alert alert-danger mt-4" style={{display: error ? '': 'none'}}>Contraseña o email incorrectos, intenta de nuevo.</div>
    )
    const showLoading = () => (
        loading && (
            <div className="alert alert-info mt-4">
                <h2>Loading..</h2>
            </div>
        )
    )

    return(
        <div>
            <NavBar />
            <h4 className="text-center">Iniciar sesión</h4>
            <div className="center mt-3 mb-3">
            {logInForm()}
            {showError()}
            {showLoading()}
            {redirectUser()}
            </div>
            <Footer />
        </div>
    )
}

export default Login;