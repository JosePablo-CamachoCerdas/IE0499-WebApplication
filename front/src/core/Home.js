import React, { useEffect, useState } from "react";
import NavBar from "../layout/NavBar";
import { getQuestions } from "./apiCore";
import Listquestion from "./Listquestion";
import Footer from "./Footer";

const Home = (req, res) => {

    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(false);

    const loadQuestions = () => {
        getQuestions().then(data => {
            if(data.error) {
                setError(data.error);
            } else {
                setQuestions(data);
                console.log(data);
            }
        
        })
    }

    useEffect(() => {
        loadQuestions();
    }, [])

    return (
    <div>   
        <NavBar/>
        <div className="container">
                {questions.map((question, i) => (
                    <div key={i}>
                        <Listquestion question={question}/>
                    </div>
                ))}
        </div>
        <Footer />
    </div>);
}

export default Home;