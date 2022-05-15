import React from "react";
// import styles from "./todoList";

export default function TodoItem({ todo, index }) {
    return (
        <li>
            <number>{index}</number>
            {todo.title}
        </li>
    );
}
