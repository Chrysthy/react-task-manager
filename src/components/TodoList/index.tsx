import { useContext } from "react";
import { themeConfig } from '../../contexts/theme';
import { ThemeContext } from '../../contexts/ThemeContext';
import type { Todo } from '../../App';
import IconCheck from '/images/icon-check.svg';

export interface TodoListProps {
    todoList: Todo[];
    toggleTodoCompleted: (id: number) => void;
}

const TodoList = ({ todoList, toggleTodoCompleted }: TodoListProps) => {
    const { theme } = useContext(ThemeContext);
    const config = themeConfig[theme].todo;

    if (todoList.length === 0) return null;

    return (
        <>

            <div className={`${config.background} border ${config.border} rounded-md`}>

                <ul>
                    {todoList.map((todo) => (

                        <li className={`border-b ${config.border} p-6`} key={todo.id}>

                            <div className="flex items-center gap-4">

                                <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-[1px]">

                                    <button onClick={() => toggleTodoCompleted(todo.id)} className={`w-full h-full border ${config.border} rounded-full cursor-pointer ${config.background} ${todo.completed ? "bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]" : ""}`}>

                                        {todo.completed && (

                                            <img src={IconCheck} alt="Check Icon" className="h-2 w-2 m-auto" />
                                        )}

                                    </button>

                                </span>

                                <p className={`${config.textColor} ${todo.completed ? "line-through opacity-50" : ""}`}>{todo.text}</p>

                            </div>
                        </li>
                    ))}
                </ul>


                {todoList.length > 0 && (


                    <div className={`text-sm flex items-center justify-between p-6 ${config.textColor} rounded-b-md`}>
                        <p>{todoList.length} items left</p>

                        <div className="hidden sm:flex gap-4">

                            <button className={`cursor-pointer ${theme === "dark" ? "hover:text-light-bg" : "hover:text-dark-bg"} ${config.textColor}`}>All</button>

                            <button className={`cursor-pointer ${theme === "dark" ? "hover:text-light-bg" : "hover:text-dark-bg"} ${config.textColor}`}>Active</button>

                            <button className={`cursor-pointer ${theme === "dark" ? "hover:text-light-bg" : "hover:text-dark-bg"} ${config.textColor}`}>Completed</button>

                        </div>

                        <button className={`cursor-pointer ${theme === "dark" ? "hover:text-light-bg" : "hover:text-dark-bg"} ${config.textColor}`}>Clear Selected
                        </button>

                    </div>

                )}

            </div>


            {todoList.length > 0 && (

                <div className={`flex justify-center gap-5 py-4 rounded-md mt-4 ${config.background} border ${config.border} rounded-md sm:hidden`}>

                    <button className={`cursor-pointer ${theme === "dark" ? "hover:text-light-bg" : "hover:text-dark-bg"} ${config.textColor}`}>All</button>

                    <button className={`cursor-pointer ${theme === "dark" ? "hover:text-light-bg" : "hover:text-dark-bg"} ${config.textColor}`}>Active</button>

                    <button className={`cursor-pointer ${theme === "dark" ? "hover:text-light-bg" : "hover:text-dark-bg"} ${config.textColor}`}>Completed</button>

                </div>
            )}
        </>
    )
}

export default TodoList;