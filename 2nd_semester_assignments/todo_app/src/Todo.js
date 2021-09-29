
import React from 'react';

function Todo({todo,index,remove}){ //remove: the name of the FUNCTION that'll be used to remove 1 of the items from the todo list
  function handle() {
    console.log('Ping:', index);
    remove(index);
  }
  return(
    <div className="todo" onClick={handle}>{todo.text} (-)</div> //we renamed removeTodo to differentiate it from removeTodo in index.js (the parent, btw)
  /*
  - the return is from index.js, but rewritten to fit:

  <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>

  - (-) is an indicator showing that if we click on that line, we'll be able to remove the item as before

  - since removeTodo() is a parameter in the Todo() and it gets passed an index, we're no longer dealing with an event,
  vagyis it won't receive an event as parameter in removeTodo()
  */
  )
}

export default Todo;