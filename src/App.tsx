import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { themeConfig } from './contexts/theme';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from "react";


function App() {

  const { theme } = useContext(ThemeContext);
  const config = themeConfig[theme];

  return (
    <>
      <main className={`h-screen ${config.layout.background}`}>

        <div className={`${config.layout.heroClass}`}>

          <div className="max-w-175 w-full m-auto p-8">

            <TodoHeader />

            <TodoForm />

            <TodoList />

          </div>

        </div>

      </main>

    </>
  )
}

export default App;
