import TodoList from "./todo/todoList.js";

function App() {
    const todos = [
        { id: 1, completed: false, title: "Купть Luna" },
        { id: 2, completed: false, title: "Продать Luna" },
        { id: 3, completed: false, title: "Спать на улице" },
    ];

    return (
        <div clssName="wrapper">
            <h1>Test</h1>

            <TodoList todos={todos} />
        </div>
    );
}

export default App;
