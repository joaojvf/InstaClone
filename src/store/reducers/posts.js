import {
    ADD_POST,
    ADD_COMMENT
} from '../actions/actionTypes';
import { act } from 'react-test-renderer';

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Joao Victor Teste',
            email: 'joaovictorteste@hotmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Stunning!!!!'
            }, {
                nickname: 'Ana Julia Arruda',
                comment: 'Foto Linda! Onde foi tirada????'
            }]
        },
        {
            id: Math.random(),
            nickname: 'Rafael Teste',
            email: 'rafaelteste@gmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            comments: []
        }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            };
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        }
                        else {
                            post.comment = [action.payload.comment]
                        }
                    }
                    return post
                })
            }

        default:
            return state;
    }
}

export default reducer;