import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'

import "./Listquestion.css";

function isCorrect(iscorrect) {
    if (iscorrect) {
        return <span role="img" aria-label="arrow">✔️</span>
    }
    else {
        return ""
    }
}

const Listquestion = ({question}) => {
    const [count, setCount] = useState(question.count)
    return(
        <div>
            <div className="container-md cards">
                <Card style={{ width: '60rem' }} className="center">
                  <Card.Header>{question.question}</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{question.answer_1}  {isCorrect(question.iscorrect_1)}</ListGroup.Item>
                    <ListGroup.Item>{question.answer_2}  {isCorrect(question.iscorrect_2)}</ListGroup.Item>
                    <ListGroup.Item>{question.answer_3}  {isCorrect(question.iscorrect_3)}</ListGroup.Item>
                    <ListGroup.Item>{question.answer_4}  {isCorrect(question.iscorrect_4)}</ListGroup.Item>
                    <ListGroup.Item>{question.answer_5}  {isCorrect(question.iscorrect_5)}</ListGroup.Item>
                  </ListGroup>
                    <Card.Body>
                    <a href={`/deletequestion/${question._id}`}>  
                        <button 
                            type="button" class="btn btn-light"
                            onClick={(e) => { if (window.confirm('Seguro que deseas borrar la pregunta de la base de datos de PAA?')) this.deleteItem(e) } }>
                            Borrar pregunta
                        </button>
                    </a>
                      {/* <Card.Link className="link" onclick="return confirm('Please click on OK to continue.');" href={`/deletequestion/${question._id}`}>Borrar pregunta</Card.Link> */}
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Listquestion;