import { SyntheticEvent, useState } from "react";
import { Button } from "../ui/button";

interface Todo {
  id: number;
  title: string;
}

const fakeAddTodo = (newTodo: Todo): Promise<Todo> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(newTodo);
      } else {
        reject("Server error");
      }
    }, 1000);
  });
};

export function OptimisticTodos() {
const [todos, setTodos] = useState<Todo[]>([])
const [newTodo, setNewTodo] = useState<string>('')
const [isLoading, setIsLoading] = useState<boolean>(false);

  const addTodo = async (e: SyntheticEvent) => {
    e.preventDefault()
    if(!newTodo.length) return;
    const optimisticTodo = {
      id: todos.length + 1,
      title: newTodo
    }


    setTodos([...todos, optimisticTodo])
    setNewTodo('')

    setIsLoading(true);

    try {
      await fakeAddTodo(optimisticTodo);
    } catch (error) {
      setTodos(todos);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={addTodo}>
      <h1 className="py-4 text-xl">Optimistic To-Do List</h1>
      <ul>
        {todos.map((todo, index) => {
          return <li key={`todo-item-${index}`}>{todo.title}</li>;
        })}
      </ul>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
        required
        className="border border-gray-300 p-2 my-2 mr-3 rounded-lg"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Add"}{" "}
      </Button>
    </form>
  );
}
