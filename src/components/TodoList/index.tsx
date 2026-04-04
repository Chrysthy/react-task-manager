const todos = [
    { id: 1, text: 'Todo 1' },
    { id: 2, text: 'Todo 2' },
    { id: 3, text: 'Todo 3' }
]

const TodoList = () => {
    return (

        <div className="bg-dark-surface rounded-md">
            <ul>
                {todos.map((todo) => (

                    <li className="p-6 border-b border-dark-border" key={todo.id}>

                        <div className="flex item-center gap-4">

                            <button className="w-6 h-6 border border-dark-border rounded-full cursor-pointer"></button>

                            <p className="text-light-bg">{todo.text}</p>

                        </div>

                    </li>
                ))}

            </ul>

            <div className="flex justify-between p-4">

                <p>{todos.length} items left</p>

                <div className="flex gap-4">

                    <button>All</button>

                    <button>Active</button>

                    <button>Completed</button>

                </div>

                <button>Clear Selected</button>

            </div>

        </div>
    )
}

export default TodoList;