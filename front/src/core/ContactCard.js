import React, {useState} from "react";
import "./Contact.css"

const ContactCard = () => {
    return (
     <div>
        <div class="card contactcard center">
            <div class="card-header">
                    Contacto
            </div>
            <div class="card-body">
                    <h5 class="card-title">Contacto y ubicación</h5>
                    <p class="card-text">Nuestras instalaciones se encuentran ubicadas en el primer piso de la antigua Facultad de Odontología. Ciudad Universitaria Rodrigo Facio. San Pedro, Montes de Oca. San José, Costa Rica.</p>
                    <p className="card-text font">Teléfonos: 2511 4385 y 2511 5725</p>
                    <p class="card-text">Números de teléfonos adicionales que pueden ser de su interés:</p>
            </div>
            <div className="center mt-2 mb-3 cont">
                <table class="table table-striped">
                    <thead>
                        <th scope="col">Oficina</th>
                        <th scope="col">Teléfono</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Oficina de Registro e Información (Sección de Admisión)</td>
                            <td>2511-4671/2511-5261</td>
                        </tr>
                        <tr>
                            <td>Sede del Atlántico</td>
                            <td>2511-9200</td>
                        </tr>
                        <tr>
                            <td>Sede del Caribe</td>
                            <td>2511-7300</td>
                        </tr>
                        <tr>
                            <td>Sede de Guanacaste</td>
                            <td>2666-0357</td>
                        </tr>
                        <tr>
                            <td>Sede de Occidente</td>
                            <td>2511-7000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}

export default ContactCard;