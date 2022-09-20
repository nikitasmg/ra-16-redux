
export const addTodo = todo => ({
    type: todosActions.ADD_TODO,
    todo
})

export const removeTodo = id => ({
    type: todosActions.REMOVE_TODO,
    id
})

export const editTodo = (id,todo) => ({
    type: todosActions.EDIT_TODO,
    id,
    todo
})

export const todosActions = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    EDIT_TODO: 'EDIT_TODO',
}
