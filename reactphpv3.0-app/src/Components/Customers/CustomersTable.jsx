import PropTypes from "prop-types";

const CustomersTable = (props) => {
    const { customers } = props;
    
    return (
        <table className="table table-sm">
            <thead className="thead-dark">
                <tr>
                    <th className="text-center">ID</th>
                    <th>Customer Name</th>
                    <th>Customer Email</th>
                    <th className="text-center">Customer Mobile Number</th>
                    <th className="text-center">Options</th>
                </tr>
            </thead>

            <tbody>
                {customers.map(customer => (
                    <tr key={customer.id}>
                        <td className="text-center">{customer.id}</td>
                        <td>{customer.customer_name}</td>
                        <td>{customer.customer_email}</td>
                        <td className="text-center">{customer.customer_mobile_number}</td>
                        <td className="text-center">
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

CustomersTable.propTypes = {
    customers: PropTypes.array,
};
 
export default CustomersTable;