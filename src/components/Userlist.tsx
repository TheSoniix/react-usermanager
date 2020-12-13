import React from "react";
import {User} from "../model/User";
import {Table} from "react-bootstrap";

function Userlist(props: {users: User[]}) {
    const rows = props.users.map((user) => (
        <tr key={user.id}>
            <td>{user.firstname}</td>
            <td>{user.secondname}</td>
            <td>{user.description}</td>
            <td>{user.creationTime.toISOString()}</td>
            <td>
                <button className="btn btn-dark m-1">
                    Edit
                </button>
                <button className="btn btn-danger m-1">
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <Table>
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
