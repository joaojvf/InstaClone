import { ADD_POST } from '../actions/actionTypes';

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
        default:
            return state;
    }
}

export default reducer;