import axios from 'axios'
import { GET_TERMS, ADD_TERM } from './types'


// GET_TERMS
export const getTerms = () => dispatch => {
    axios.get('/api/history/')
        .then(res => {
            dispatch({
                type: GET_TERMS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}


// ADD_TERM
export const addTerm = (term) => dispatch => {
    axios.post('/api/history/', term)
        .then(res => {
            dispatch({
                type: ADD_TERM,
                payload: res.data
            })
        }).catch(err => console.log(err))
}