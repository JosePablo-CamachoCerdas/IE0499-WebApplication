import React, {useEffect, useState} from "react";
import NavBar from "../layout/NavBar";
import Footer from "./Footer";
import { isAuthenticated, createQuestion } from "./apiCore";

const AddQuestion = () => {
    const [values, setValues] = useState({
        question: "",
        answer_1: "",
        iscorrect_1: false,
        answer_2: "",
        iscorrect_2: false,
        answer_3: "",
        iscorrect_3: false,
        answer_4: "",
        iscorrect_4: false,
        answer_5: "",
        iscorrect_5: false,
        loading: false,
        error: '',
        createdQuestion: '',
        redirectToProfile: false,
        formData: ''
    })

    const { user, token } = isAuthenticated()
    const {
        question,
        answer_1,
        iscorrect_1,
        answer_2,
        iscorrect_2,
        answer_3,
        iscorrect_3,
        answer_4,
        iscorrect_4,
        answer_5,
        iscorrect_5,
        loading,
        error,
        createdQuestion,
        redirectToProfile,
        formData
    } = values;


    useEffect(() => {
        setValues({...values, formData: new FormData()});
      }, []); 

    const handleChange = name => event => {
      const target = event.target
      const value = target.type === "checkbox" ? target.checked : target.value
      formData.set(name, value)
      setValues({ ...values, [name]: value })
    }

    const showError = () => (
        <div
          className='alert alert-danger'
          style={{ display: error ? '' : 'none' }}>
          {error}
        </div>
      )
    
      const showSuccess = () => (
        <div
          className='alert alert-info'
          style={{ display: createdQuestion ? '' : 'none' }}>
          <p>Pregunta creada exitosamente</p>
        </div>
      )
    
      const showLoading = () =>
        loading && (
          <div className='alert alert-success'>
            <p>Agregando nueva pregunta...</p>
          </div>
        )

        const clickSubmit = event => {
            event.preventDefault()
            setValues({ ...values, error: '', loading: true })
            createQuestion(user._id, token, formData).then(data => {
              if (data.error) {
                setValues({ ...values, error: data.error })
              } else {
                setValues({
                  ...values,
                  question: '',
                  answer_1: '',
                  iscorrect_1: false,
                  answer_2: '',
                  iscorrect_2: false,
                  answer_3: '',
                  iscorrect_3: false,
                  answer_4: '',
                  iscorrect_4: false,
                  answer_5: '',
                  iscorrect_5: false,
                  loading: false,
                  createdQuestion: data.question
                })
              }
            })
          }

        const addQuestionForm = () => (
            <form>
                <div className="form-group mb-3 mt-3">
                    <label for="exampleName" className="mb-2">Nueva Pregunta</label>
                    <input 
                        onChange={handleChange('question')} 
                        value={question}
                        type="text" 
                        className="mb-1 form-control formquestion" 
                        id="question" 
                        aria-describedby="textHelp" 
                        placeholder="Pregunta"/>
                        <small id="emailHelp" className="form-text text-muted">Esta será la pregunta que verán los estudiantes en la práctica.</small>
                </div>
                <div className="form-group mb-3 mt-3">
                    <input 
                        onChange={handleChange('answer_1')} 
                        value={answer_1}
                        type="text" 
                        className="mb-1 form-control" 
                        id="ans1" 
                        aria-describedby="textHelp" 
                        placeholder="Respuesta A"/>
                </div>
                <div className="form-check">
                    <input type="checkbox"
                        onChange={handleChange("iscorrect_1")} 
                        value={iscorrect_1} className="form-check-input" id="check1"/>
                    <label className="form-check-label" for="exampleCheck1">Respuesta correcta?</label>
                </div>
                <div className="form-group mb-3 mt-3">
                    <input 
                        onChange={handleChange('answer_2')} 
                        value={answer_2}
                        type="text" 
                        className="mb-1 form-control" 
                        id="ans2" 
                        aria-describedby="textHelp" 
                        placeholder="Respuesta B"/>
                </div>
                <div className="form-check">
                    <input type="checkbox"
                        onChange={handleChange('iscorrect_2')} 
                        value={iscorrect_2} className="form-check-input" id="check2"/>
                    <label className="form-check-label" for="exampleCheck1">Respuesta correcta?</label>
                </div>


                {/* <div>
                  <h4>TEST CHECKBOX</h4>
                    <div className="form-check">
                        <input type="checkbox"
                            onChange={event => handleTest("iscorrect_2", event.target.checked)} 
                            value={iscorrect_2} className="form-check-input" id="check2"/>
                        <label className="form-check-label" for="exampleCheck1">Respuesta correcta?</label>
                    </div>
                </div> */}


                <div className="form-group mb-3 mt-3">
                    <input 
                        onChange={handleChange('answer_3')} 
                        value={answer_3}
                        type="text" 
                        className="mb-1 form-control" 
                        id="ans3" 
                        aria-describedby="textHelp" 
                        placeholder="Respuesta C"/>
                </div>
                <div className="form-check">
                    <input type="checkbox"
                        onChange={handleChange('iscorrect_3')}   
                        value={iscorrect_3} className="form-check-input" id="check3"/>
                    <label className="form-check-label" for="exampleCheck1">Respuesta correcta?</label>
                </div>
                <div className="form-group mb-3 mt-3">
                    <input 
                        onChange={handleChange('answer_4')} 
                        value={answer_4}
                        type="text" 
                        className="mb-1 form-control" 
                        id="ans4" 
                        aria-describedby="textHelp" 
                        placeholder="Respuesta D"/>
                </div>
                <div className="form-check">
                    <input type="checkbox"
                        onChange={handleChange('iscorrect_4')}  
                        value={iscorrect_4} className="form-check-input" id="check4"/>
                    <label className="form-check-label" for="exampleCheck1">Respuesta correcta?</label>
                </div>
                <div className="form-group mb-3 mt-3">
                    <input 
                        onChange={handleChange('answer_5')} 
                        value={answer_5}
                        type="text" 
                        className="mb-1 form-control" 
                        id="ans5" 
                        aria-describedby="textHelp" 
                        placeholder="Respuesta E"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" 
                        onChange={handleChange('iscorrect_5')} 
                        value={iscorrect_5} className="form-check-input" id="check5"/>
                    <label className="form-check-label" for="exampleCheck1">Respuesta correcta?</label>
                </div>
                
                <button onClick={clickSubmit} type="submit" className="btn btn-secondary mt-3">Submit</button>
            </form>
        )
           
    return(
        <div>
            <NavBar />
            <div className="center mt-3 mb-3">
            <h5>Agrega una nueva pregunta a la PAA y marca la casilla de la respuesta correcta</h5>
                {showLoading()}
                {showSuccess()}
                {showError()}
                {addQuestionForm()}
            </div>
            <Footer />
        </div>
    )
}

export default AddQuestion;