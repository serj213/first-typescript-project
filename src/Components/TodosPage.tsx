import React, { FC } from "react";
import axios from "axios";

import { ITodos } from "../types/types";
import List from "./Lists";
import TodosItem from "./TodosItem";


const TodosPage: FC = () => {


    const [todos, setTodos] = React.useState<ITodos[]>([]);

    React.useEffect(() => {

        fetchTodos();
    }, [])


    async function fetchTodos() {
        try {
            const response = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data);

        } catch (e) {
            alert(e);
        }
    }


    return (
        <div>
            <List items={todos} renderItem={(todo: ITodos) => <TodosItem key={todo.id} todo={todo} />} />
        </div>
    )
}

export default TodosPage;