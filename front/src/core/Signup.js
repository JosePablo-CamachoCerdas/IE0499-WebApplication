import React, { useState, useEffect } from "react";
import NavBar from "../layout/NavBar";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import "./Signup.css"
import { signup } from "./apiCore";

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
      })

    const { name, email, password, success, error } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value }) 
    }

    const clickSubmit = (event) => {
      event.preventDefault();
      setValues({ ...values, error: false })
      signup({ name, email, password }).then(data => { 
        if (data.error) {
          setValues({ ...values, error: data.error, success: false })
        } else {
          setValues({
            ...values,
            name: '',
            email: '',
            password: '',
            error: '',
            success: true
          })
        }
      })
    }
    const signUpForm = () => (
      <form>
        <div className="form-group mb-3 mt-3">
          <label for="exampleName" className="mb-2">Name</label>
          <input 
              onChange={handleChange('name')} 
              value={name}
              type="text" 
              className="mb-1 form-control" 
              id="name" 
              aria-describedby="textHelp" 
              placeholder="Tu nombre"/>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="mb-2">Email</label>
          <input 
              onChange={handleChange('email')} 
              type="email" 
              value={email}
              className="mb-1 form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              placeholder="Tu email"/>
          <small id="emailHelp" className="form-text text-muted">Tu información no es compartida con terceros.</small>
        </div>
        <div class="form-group mt-2">
          <label for="exampleInputPassword1" className="mb-2">Contraseña</label>
          <input 
              onChange={handleChange('password')} 
              value={password}
              type="password" 
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder="Tu contraseña"/>
        </div>
        <button onClick={clickSubmit} type="submit" class="btn btn-secondary mt-3">Registrarse</button>
      </form>
    )

    const showError = () => (
        <div className='alert alert-danger mt-4' style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )
    
    const showSuccess = () => (
        <div className='alert alert-info mt-4' style={{display: success ? '':'none'}}> Cuenta registrada, puedes <Link to='/login'> Iniciar Sesión</Link>
        </div>
    )


    return(
        <div>
            <NavBar />
            <h4 className="text-center">Registrarse</h4>
            <div className="center mt-3 mb-3">
            {signUpForm()}
            {showError()}
            {showSuccess()}
            </div>
            <Footer />
        </div>
    )
}

export default Signup;