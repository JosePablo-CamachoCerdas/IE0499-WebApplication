import React, {useState, useEffect} from 'react';
import { deleteQuestion } from './apiCore';

const DeleteQuestion = (props) => {

    const [question, setQuestion] = useState ({});
    const [err, setError] = useState(false);

    const deleteSingleQuestion = questionId => {
        deleteQuestion(questionId).then(data => {
            if (data.error){
                setError(data.error)
            } else {
                console.log("Success deleting question")
            }
        });
    }
    
    useEffect(() => {
        const questionId = props.match.params.questionId
        console.log(questionId)
        deleteSingleQuestion(questionId)
    }, [props])

    return(
    <>
        <h3>Question deleted</h3>
    </>
    )
}

export default DeleteQuestion;