import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Listquestion.css";

function isCorrect(iscorrect) {
    if (iscorrect) {
        return "CORRECTA"
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
                    <ListGroup.Item>{question.answer_1} {isCorrect(question.iscorrect_1)}</ListGroup.Item>
                    <ListGroup.Item>{question.answer_2} {isCorrect(question.iscorrect_2)}</ListGroup.Item>
                    <ListGroup.Item>{question.answer_3} {isCorrect(question.iscorrect_3)}</ListGroup.Item>
                    <ListGroup.Item>{question.answer_4} {isCorrect(question.iscorrect_4)}</ListGroup.Item>
                    <ListGroup.Item>{question.answer_5} {isCorrect(question.iscorrect_5)}</ListGroup.Item>
                  </ListGroup>
                    <Card.Body>
                      <Card.Link className="link" href="/editar">Editar pregunta</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Listquestion;