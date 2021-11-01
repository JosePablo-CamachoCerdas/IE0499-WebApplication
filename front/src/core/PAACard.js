import React, {useState} from "react";
import "./Contact.css"

const PAACard = () => {
    return (
     <div>
        <div class="card contactcard center">
            <div class="card-header">
                    Prueba de Aptitud Académica
            </div>
            <div class="card-body">
                <p class="card-text">La Prueba de Aptitud Académica (PAA) es un instrumento que la Universidad de Costa Rica (UCR) aplica anualmente para seleccionar a aquellos aspirantes con las mayores probabilidades de cursar exitosamente la educación superior pública. Por ello, el objetivo de dicha aplicación es ordenar a todos los aspirantes con base en su promedio de admisión y elegir a aquellos con los mejores promedios tomando en consideración los cupos disponibles de la Universidad. Es importante recalcar dos aspectos. En primer lugar, la nota de presentación se calcula con base en ciertas materias del cuarto ciclo de educación diversificada. En segundo lugar, el promedio de admisión con el cual los aspirantes concursan para ingreso a carrera se transforma de una escala 0 – 100 a una de 200 – 800.</p>
            </div>
        </div>
    </div>);
}

export default PAACard;