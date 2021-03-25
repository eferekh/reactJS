import React, { Component } from "react";
import User from "./User";

class Users extends Component {
    render() {
        return (
            <>
                {this.props.users.map((user) => (
                    <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        website={user.website}
                        updateWebsiteName={this.props.updateWebsiteName}
                    />
                ))}
            </>
        );
    }
}

export default Users;
