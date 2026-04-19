import { useContext } from "react";
import { themeConfig } from '../../contexts/theme';
import { ThemeContext } from '../../contexts/ThemeContext';

const todos = [
    { id: 1, text: 'Todo 1' },
    { id: 2, text: 'Todo 2' },
    { id: 3, text: 'Todo 3' }
]

const TodoList = () => {
    const { theme } = useContext(ThemeContext);
    const config = themeConfig[theme].todo;

    return (
        <>
            <div className={`${config.background} border ${config.border} rounded-md`}>
                <ul>
                    {todos.map((todo) => (

                        <li className={`border-b ${config.border} p-6`} key={todo.id}>

                            <div className="flex items-center gap-4">

                                <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]">

                                    <button className={`w-full h-full border ${config.border} rounded-full cursor-pointer ${config.background}`}></button>

                                </span>

                                <p className={config.textColor}>{todo.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className={`text-sm flex items-center justify-between p-6 ${config.textColor} rounded-b-md`}>
                    <p>{todos.length} items left</p>

                    <div className="hidden sm:flex gap-4">
                        <button>All</button>
                        <button className={config.textColor}>Active</button>
                        <button className={config.textColor}>Completed</button>
                    </div>

                    <button className={config.textColor}>Clear Selected</button>
                </div>



            </div>

            <div className={`flex justify-center gap-5 py-4 rounded-md mt-4 ${config.background} border ${config.border} rounded-md sm:hidden`}>

                <button>All</button>
                <button className={config.textColor}>Active</button>
                <button className={config.textColor}>Completed</button>

            </div>

        </>
    )
}

export default TodoList;