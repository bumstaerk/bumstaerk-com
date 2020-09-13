import React from 'react';

import Todos from 'data/todos';

const TodoList = () => {

  return(<>
    Project Todos
    <ul>
      {Todos.list.map((t) => {
        return(<li>
          <input type="checkbox" checked={t.isDone} disabled />
          {t.description}
        </li>)
      })}
    </ul>
  </>) 
  
}

export default TodoList;