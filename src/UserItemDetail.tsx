import React from "react";
import axios from "axios";


import { useParams, useNavigate } from "react-router-dom";

import { IUser } from "./types/types";



const UserItemDetail: React.FC = () => {


    const [user, setUser] = React.useState<IUser | null>(null);
    const params = useParams()
    const history = useNavigate();


    React.useEffect(() => {
        fetchUser();    
    }, []);

    console.log('params.id ', params.id);
    
    
    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('http://jsonplaceholder.typicode.com/posts/' + params.id);
            setUser(response.data);           
        } catch (e) {
            alert(e);
        }
    }


    return (
        <div>
            <button onClick={() => history('/users')}>
                Back
            </button>
            <h1>
                Страница пользователя под номером {user?.id}
            </h1>
        </div>
    )
}

export default UserItemDetail;