import React, { Component } from "react";
import UserTableRow from "./UserTableRow";
import UserDeleteModal from "./UserDeleteModal";

class Users extends Component {
    render() {
        const { users } = this.props;

        return (
            <div className="usersTableContainer">
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
                                setShowUserDeleteModal={this.props.setShowUserDeleteModal}
                            />
                        ))}
                    </tbody>
                </table>

                <UserDeleteModal
                    userId={this.props.userDeleteModalId}
                    onDelete={this.props.deleteUser}
                    showUserDeleteModal={this.props.showUserDeleteModal}
                    setShowUserDeleteModal={this.props.setShowUserDeleteModal}
                />
            </div>
        );
    }
}

export default Users;
