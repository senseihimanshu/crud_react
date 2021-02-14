import React from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';

function TodoList(){
    const [todos, setTodos] = React.useState([{ id: 1, 'task': 'leetcode at 1:30' }, { id: 2, 'task': 'codeforces at 20:00' }]);

    function create(newTodo){
        setTodos([...todos, { 'task': newTodo }]);
    }

    function deleteTodo(id){
        console.log(id);
        setTodos(todos.filter((todo) => id != todo.id));
    }

    function editTodo(id, task){
        console.log(id, task);
        setTodos(todos.map((todo) => {
            if(todo.id === id){
                return { ...todo, task };
            }
            return todo;
        }));
        // todos.find((todo) => todo.id === id).task = task;
        // console.log(todoToEdit);
        // todoToEdit.task = task;
    }

    return (
        <div>
            <h1>Todo List!</h1>
            <ul>
                { todos.map((todo) => <Todo key={todo.id} id={todo.id} task={todo.task} deleteTodo={deleteTodo} editTodo={editTodo} />) }
            </ul>

            <NewTodo createTodo={create} />
        </div>
    );
}

export default TodoList;