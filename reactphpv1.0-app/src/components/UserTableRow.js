import React, { Component } from "react";

class UserTableRow extends Component {
    render() {
        const {
            id,
            fullname,
            email,
            city,
            phone_number,
            role,
        } = this.props.user;

        return (
            <tr>
                <td className="text-center">
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => this.props.getUserData(id)}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-danger btn-sm ml-2"
                        onClick={() => this.props.setShowUserDeleteModal(id)}
                    >
                        Delete
                    </button>
                </td>
                <td>{fullname}</td>
                <td>{email}</td>
                <td>{city}</td>
                <td>{phone_number}</td>
                <td className="text-center">
                    {role === "1" ? "Administrator" : "Agent"}
                </td>
            </tr>
        );
    }
}

export default UserTableRow;
