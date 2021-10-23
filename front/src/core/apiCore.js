import { API } from "../config" ;

export const getQuestions = () => {
    return fetch(
    "http://localhost:5000/api/question/listquestion",
        {
            method: 'GET'
        }
    )
        .then(response => {
            console.log(response)
            return response.json()
        })
    .catch(err => console.log(err))
}
