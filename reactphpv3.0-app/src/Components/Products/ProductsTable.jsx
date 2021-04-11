import PropTypes from "prop-types";

const ProductsTable = (props) => {
    const { products, onDelete, onEdit } = props;

    return (
        <table className="table table-sm productsTable">
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
                            <button onClick={() => onEdit(product.id)} className="btn btn-sm btn-primary">
                                Edit
                            </button>

                            <button onClick={() => onDelete("product", product.id)} className="btn btn-sm btn-danger ml-2">
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
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
};

export default ProductsTable;
