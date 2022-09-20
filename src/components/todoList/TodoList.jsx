import React from 'react';
import TodoItem from "../todoItem/TodoItem.jsx";
import s from './todoList.module.scss'

const TodoList = ({todos, handleDelete, handleEdit}) => {
    return (
        <ul className={s.list}>
            {todos.map(todo => <TodoItem key={todo.id}
                                         todo={todo}
                                         handleDelete={handleDelete}
                                         handleEdit={handleEdit}
            />)}
        </ul>
    );
};

export default TodoList;