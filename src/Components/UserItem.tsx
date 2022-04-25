import React, { FC } from "react";
import { IUser } from "../types/types";

import { useNavigate } from "react-router-dom";


interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {

    const history = useNavigate();
    return (
        <div onClick={() => history('/users/' + user.id)} style={{ padding: 15, border: '1px solid green' }}>
            мой id: {user.id}
            <h1>
                {user.title}
            </h1>
            <p>
                {user.body}
            </p>
        </div>
    )
}

export default UserItem;