import React, { Component } from 'react';

class UserTableRow extends Component {
    render() {
        const { id, fullname, email, amount } = this.props.user;

        return (
            <tr>
                <td className="text-center">{id}</td>
                <td>{fullname}</td>
                <td>{email}</td>
                <td className="text-center">{amount}</td>
                <td className="text-center">
                    <button className="btn btn-sm btn-primary" onClick={() => this.props.onIncrease(id, amount)}>+</button>
                    <button className="btn btn-sm btn-danger ml-2" onClick={() => this.props.onDecrease(id, amount)}>-</button>
                </td>
            </tr>
        );
    }
}
 
export default UserTableRow;