// Excercise 4: Create a TodoList component that allows adding, displaying, and removing todoitems. Use useState for the todos array and each todo should have a button to
// remove it.

import React, { useState } from "react";

function TodoList() {
  // State to store todo items
  const [todos, setTodos] = useState([]);

  // State to store the current input value
  const [newTodo, setNewTodo] = useState("");

  // Function to handle adding a new todo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo(""); // Clear the input after adding a todo
    }
  };

  // Function to handle removing a todo by index
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h3>Todo List</h3>

      {/* Input for adding new todos */}
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {/* Display the list of todos with remove buttons */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
