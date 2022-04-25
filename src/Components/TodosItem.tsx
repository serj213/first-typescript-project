import React, { FC } from "react";
import { ITodos } from "../types/types";

interface TodosItemProps {
    todo: ITodos;
}

const TodosItem: FC<TodosItemProps> = ({ todo }) => {
    return (
        <div style={{ border: '2px solid red', padding: 30 }}>
            <div style={{ marginBottom: 20 }}>
                {todo.title}
            </div>

            <div>
                {todo.completed ? 'выполнено' : 'не выполнено'}
            </div>
        </div>
    )
}

export default TodosItem;