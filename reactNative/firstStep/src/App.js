import React from "react";
import TodoList from "./todo/todoList.js";
import Context from "./context";

function App() {
    const [todos, setTodos] = React.useState([
        { id: 1, completed: false, title: "Купть Luna" },
        { id: 2, completed: false, title: "Продать Luna" },
        { id: 3, completed: false, title: "Спать на улице" },
    ]);

    function toggleTodo(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    }

    return (
        <Context.Provider value={{}}>
            <div className="wrapper">
                <h1>Test</h1>

                <TodoList todos={todos} onToggle={toggleTodo} />
            </div>
        </Context.Provider>
    );
}

export default App;
