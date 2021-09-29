import React from "react";

// user input - includes validation
function TodoForm({addTodo}){ //added addTodo function as parameter
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    /* before the Form component, it continued like this:
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
    setTodos(newTodos);
    */
    //we'll put this into index.js

    //the upper code depended on the state / accessing todos, but since it's not in index.js, we had to rewrite it, hence the addTodo function
    addTodo(value); //this function needs to exist in index.js
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}

export default TodoForm;