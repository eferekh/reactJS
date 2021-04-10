import React, { Component } from "react";
import UserTableRow from "./UserTableRow";

class UsersTable extends Component {
    displayUsers = () => {};

    render = () => {
        return (
            <table className="table table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th className="text-center">ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th className="text-center">Amount</th>
                        <th className="text-center">Inc / Dec</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.users.map((user) => {
                        return <UserTableRow key={user.id} user={user} onIncrease={this.props.onIncrease} onDecrease={this.props.onDecrease} />;
                    })}
                </tbody>
            </table>
        );
    };
}

export default UsersTable;
