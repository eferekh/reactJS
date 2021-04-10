import PropTypes from "prop-types";

const UsersTable = (props) => {
    const { users } = props;

    return (
        <table className="table table-sm">
            <thead className="thead-dark">
                <tr>
                    <th className="text-center">ID</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th className="text-center">Type</th>
                    <th>Options</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td className="text-center">{user.id}</td>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{user.email}</td>
                        <td className="text-center">{user.is_admin === "1" ? "Administrator" : "User"}</td>
                        <td>
                            <button className="btn btn-sm btn-primary">
                                Edit
                            </button>

                            <button className="btn btn-sm btn-danger ml-2">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

UsersTable.propTypes = {
    users: PropTypes.array
}
 
export default UsersTable;