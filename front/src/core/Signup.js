import React from "react";
import NavBar from "../layout/NavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import "./Signup.css"

const Signup = () => {

    return(
        <div>
            <NavBar />
            <h4 className="text-center">Registrarse</h4>
            <div className="center mt-3 mb-3">
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder="Tu nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Tu email" />
                        <Form.Text className="text-muted">
                            Esta dirección de correo no es compartida con nadie.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Tu contraseña" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Registrarse
                    </Button>
                </Form>
            </div>
            <Footer />
        </div>
    )
}

export default Signup;