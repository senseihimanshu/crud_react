import React from 'react';

function EditTodo(props){
    const [editTodo, setEditTodo] = React.useState(props.task);

    function handleChange(evt){
        setEditTodo(evt.target.value);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        props.editTodo(editTodo);
        setEditTodo('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Edit Todo</label>
            <input type="text" placeholder="Edit Todo" id="task" name="task" value={editTodo} onChange={handleChange} />
            <button type="submit">Edit Todo</button>
        </form>
    );
}

export default EditTodo;