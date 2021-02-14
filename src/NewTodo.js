import React from 'react';

function NewTodo(props){
    const [newTodo, setNewTodo] = React.useState('');

    function handleChange(evt){
        setNewTodo(evt.target.value);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        props.createTodo(newTodo);
        setNewTodo('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">New Todo</label>
            <input type="text" placeholder="New Todo" id="task" name="task" value={newTodo} onChange={handleChange} />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default NewTodo;