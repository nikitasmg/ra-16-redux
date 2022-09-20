import {todosActions} from "../actions/index.js";

const todos = (state = [], action) => {
    switch (action.type) {
        case todosActions.ADD_TODO:
            return [
                ...state,
                action.todo
            ]
        case todosActions.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case todosActions.EDIT_TODO:
            return state.map(todo => {
                if(todo.id === action.id) {
                    return action.todo
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}


export default todos