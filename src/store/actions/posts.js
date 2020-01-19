import { ADD_POST, ADD_COMMENT } from './actionTypes'
import axios from 'axios'

export const addPost = post => {
    console.log('Entrou addPost');
    console.log('Post: ', post);
    return dispatch => {
        axios.post('/posts.json', { ...post })
            .catch(err => console.log('Entrou no catch: ', err))
            .then(res => console.log('Entrou no than:', res))
    }
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}

