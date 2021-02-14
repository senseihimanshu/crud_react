import React from 'react';
import EditTodo from './EditTodo';

function Todo(todo){
    const [task, setTask] = React.useState(todo.task);
    const [isEdit, setIsEdit] = React.useState(false);
    
    function toggleEdit(){
        setIsEdit(!isEdit);
    }

    function editTodo(edittedTask){
        console.log(edittedTask);
        // setTask(edittedTask);
        todo.editTodo(todo.id, edittedTask);
        toggleEdit();
    }

    return (
        <div>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={() => todo.deleteTodo(todo.id)}>X</button>
            {   isEdit?
                    <EditTodo task={todo.task} editTodo={editTodo} />
                        :
                    <li key={ todo['id'] }>{ todo['task'] }</li>
            }
        </div>
    );
}

export default Todo;