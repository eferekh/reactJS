import PropTypes from "prop-types";

const ProductsTable = (props) => {
    const { products } = props;

    return (
        <table className="table table-sm">
            <thead className="thead-dark">
                <tr>
                    <th className="text-center">ID</th>
                    <th>Product Name</th>
                    <th className="text-center">Product Price</th>
                    <th>Product Category</th>
                    <th className="text-center">Options</th>
                </tr>
            </thead>

            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td className="text-center">{product.id}</td>
                        <td>{product.product_name}</td>
                        <td className="text-center">${product.product_price}</td>
                        <td>{product.category_name}</td>
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
};

ProductsTable.propTypes = {
    products: PropTypes.array,
};

export default ProductsTable;
