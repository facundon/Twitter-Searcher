import axios from 'axios'
import { GET_TERMS } from './types'


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