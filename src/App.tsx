import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContainer } from "./components/TodoContainer";
import { useTodo } from "./hooks/useTodo";


function App() {

  const { addTodo, toggleTodoCompleted, filteredTodo, setFilter, filter, clearCompleted } = useTodo();

  return (

    <TodoContainer>

      <TodoHeader />

      <TodoForm addTodo={addTodo}></TodoForm>

      <TodoList
        todoList={filteredTodo}
        toggleTodoCompleted={toggleTodoCompleted}
        setFilter={setFilter}
        filter={filter}
        clearCompleted={clearCompleted}
      >

      </TodoList>

    </TodoContainer>
  )
}

export default App;
