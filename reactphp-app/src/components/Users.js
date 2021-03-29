import React, { Component } from "react";
import UserTableRow from "./UserTableRow";

class Users extends Component {
    render() {
        const { users } = this.props;

        return (
            <table className="table table-sm usersTable">
                <thead className="thead-dark">
                    <tr>
                        <th className="text-center">Options</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone Number</th>
                        <th className="text-center">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <UserTableRow
                            key={user.id}
                            user={user}
                            getUserData={this.props.getUserData}
                            deleteUser={this.props.deleteUser}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Users;
