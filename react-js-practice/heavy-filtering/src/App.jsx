import React, { useCallback, useMemo, useState } from "react";
import TodoItem from "./components/TodoItem";

const expensiveCalculation = (num) => {
  console.log("Calculating... This takes time!");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }

  return num;
};

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Initial Todo"]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () =>
    setTodos((t) => [...t, "New Todo " + Math.random().toFixed(2)]);

  const handleRemoveTodo = useCallback((index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);

    setTodos(updatedTodos);
  }, [todos])

  return (
    <div className="App">
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => (
          // Use the child component
          <TodoItem
            key={index}
            todo={todo}
            onClick={handleRemoveTodo}
            index={index}
          />
        ))}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation Result: {calculation}</h2>
      </div>
    </div>
  );
}

export default App;
