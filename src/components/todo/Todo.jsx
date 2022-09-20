import React, {useState} from 'react';
import AddForm from "../addForm/AddForm.jsx";
import TodoList from "../todoList/TodoList.jsx";
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "nanoid";
import {addTodo, editTodo, removeTodo} from "../../actions/index.js";

const Todo = () => {
    const [text, setText] = useState('')
    const [price, setPrice] = useState('')
    const [editId, setEditId] = useState(null)
    const [search, setSearch] = useState('')
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text || !price) {
            return
        }
        const todo = {
            id: nanoid(),
            text,
            price
        }
        if (editId) {
            dispatch(editTodo(editId, todo))
            setEditId(null)
        } else {
            dispatch(addTodo(todo))
        }
        handleCancel()
    }

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
        if (editId) {
            handleCancel()
            setEditId(null)
        }
    }

    const handleEdit = (id) => {
        const {text, price} = todos.find(el => el.id === id)
        setPrice(price)
        setText(text)
        setEditId(id)
    }

    const handleCancel = () => {
        setText('')
        setPrice('')
    }

    const filteredTodos = () => {
        if (search) {
            return todos.filter((el) => el.text.toLowerCase().indexOf(search.toLowerCase()) > -1);
        }
        return todos
    }

    return (
        <div>
            <AddForm
                text={text}
                price={price}
                changePrice={e => setPrice(e)}
                changeText={e => setText(e)}
                handleSubmit={handleSubmit}
                handleCancel={() => handleCancel()}
            />
            <label style={{marginBottom:20, display:"block"}}>
                <span>Search </span>
                <input type="text"
                       value={search}
                       onChange={e => setSearch(e.target.value)}
                />
            </label>
            <TodoList
                todos={filteredTodos()}
                handleEdit={e => handleEdit(e)}
                handleDelete={e => handleDelete(e)}
            />
        </div>
    );
};

export default Todo;