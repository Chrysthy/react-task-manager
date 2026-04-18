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

        <div className={`${config.background} rounded-md`}>
            <ul>
                {todos.map((todo) => (

                    <li className={`${config.border} p-6`} key={todo.id}>

                        <div className="flex item-center gap-4">

                            <button className={`${config.textColor} w-6 h-6 border border-dark-text rounded-full cursor-pointer`}></button>

                            <p className={`${config.textColor}`}>{todo.text}</p>

                        </div>

                    </li>
                ))}

            </ul>

            <div className={`flex items-center justify-between p-6 ${config.textColor} rounded-b-md`}>

                <p>{todos.length} items left</p>

                <div className="flex gap-4">

                    <button className={`${config.textColor} text-text-brighr-blue`}>All</button>

                    <button className={`${config.textColor}`}>Active</button>

                    <button className={`${config.textColor}`}>Completed</button>

                </div>

                <button className={`${config.textColor}`}>Clear Selected</button>

            </div>

        </div>
    )
}

export default TodoList;