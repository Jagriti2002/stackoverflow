import axios from 'axios'

const API = axios.create({ baseURL: 'https://stackoverflow-clone-i7gb.onrender.com'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => axios.post('https://stackoverflow-clone-i7gb.onrender.com/user/login', authData);
export const signUp = (authData) => axios.post('https://stackoverflow-clone-i7gb.onrender.com/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => axios.get('https://stackoverflow-clone-i7gb.onrender.com/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`) 
export const voteQuestion = (id, value ) => API.patch(`/questions/vote/${id}`, { value })

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered ) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered })
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers})

export const getAllUsers = () => API.get('https://stackoverflow-clone-i7gb.onrender.com/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)