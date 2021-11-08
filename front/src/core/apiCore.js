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

export const login = user => {
    return fetch(
    "http://localhost:5000/api/auth/login",
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user) // Sending body as json object
        })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err);
        })  
};

// Method to save the data on the local storage 
export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

export const logout = (next) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt')
        next()
        return fetch(
            "http://localhost:5000/api/auth/logout", {
                method: "GET",
        })
            .then(response => {
                console.log('logout', response);
            })
            .catch(err => console.log(err));
    }
} 

export const signup = user => {
    return fetch(
        "http://localhost:5000/api/auth/signup", { 
            method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      })
  };

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if(localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
        //return localStorage.getItem('jwt');
    } 
    return false;
}

export const createQuestion = (userId, token, question) => {
    return fetch("http://localhost:5000/api/question/createquestion", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: question
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err);
      })
  }

  export const deleteQuestion = (questionId) => {
    return fetch (`http://localhost:5000/api/question/${questionId}`, {
    method: "DELETE"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
  }