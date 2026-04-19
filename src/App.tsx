import { useState, type FormEvent } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContainer } from "./components/TodoContainer";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string;

    if (!todoItem.trim()) return;

    setTodoList(prev => [...prev, {
      id: Date.now(),
      text: todoItem,
      completed: false
    }])

    event.currentTarget.reset();
  }

  const toggleTodoCompleted = (id: number) => {

    const newTodoList = todoList.map(todo => {

      if (id === todo.id) {

        const completed = !todo.completed;

        return {
          ...todo,
          completed: completed,
        }
      }

      return todo;
    });
    setTodoList(newTodoList);
  };

  return (

    <TodoContainer>

      <TodoHeader />

      <TodoForm addTodo={addTodo}></TodoForm>

      <TodoList todoList={todoList} toggleTodoCompleted={toggleTodoCompleted}></TodoList>

    </TodoContainer>
  )
}

export default App;
