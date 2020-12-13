import React from "react";
import {User} from "../model/User";
import {Table} from "react-bootstrap";

function Userlist(props: {users: User[], onDelete: (user: User) => void, onEdit: (user: User) => void}) {
    const rows = props.users.map((user) => (
        <tr key={user.id}>
            <td>{user.firstname}</td>
            <td>{user.secondname}</td>
            <td>{user.description}</td>
            <td>{user.creationTime.toISOString()}</td>
            <td>
                <button className="btn btn-dark m-1" onClick={() => props.onEdit(user)}>
                    Edit
                </button>
                <button className="btn btn-danger m-1" onClick={() => props.onDelete(user)}>
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <Table responsive>
            <thead>
            <tr>
                <th>Firstname</th>
                <th>Secondname</th>
                <th>Description</th>
                <th>Date</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </Table>
    );
}

export default Userlist;
