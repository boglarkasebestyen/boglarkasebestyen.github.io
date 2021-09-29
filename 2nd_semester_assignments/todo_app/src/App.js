import React from 'react';
import Todo from "./Todo";
import TodoForm from "./TodoForm"


function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Get up at 9:00 AM',
      isCompleted: false,
    },
    {
      text: 'Have breakfast',
      isCompleted: false,
    },
    {
      text: 'Build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => { 
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => { //gets index as parameter instead of event now
    // var index = Number(e.target.id); --> no longer 
    // we update the array of objects just as before, but the value now is being paased from the component
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    /*
    where it used to be:

    {todos.map((todo, i) => (
        <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>
      ))}
      <TodoForm addTodo={addTodo} /> 
    */
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
          //todo={todo} which is the value of the item of the todo list
          //"remove" points to the removeTodo function
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
