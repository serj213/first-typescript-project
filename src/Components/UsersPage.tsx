import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { IUser } from "../types/types";

import List from "./Lists";
import UserItem from "./UserItem";


const UserPage: React.FC = () => {


    const [users, setUsers] = React.useState<IUser[]>([]);
    const history = useNavigate();

    React.useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('http://jsonplaceholder.typicode.com/posts?_limit=10');
            setUsers(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div style={{ marginBottom: 30 }}>
            <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user} />} />
        </div>
    )
}

export default UserPage;