import React from 'react';
import s from './todoItem.module.scss'
const TodoItem = ({todo, handleEdit, handleDelete}) => {
    return (
        <li className={s.item}>
            <span>{todo.text} {todo.price}</span>
            <button onClick={() => handleEdit(todo.id)}>edit</button>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
        </li>
    );
};

export default TodoItem;