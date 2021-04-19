import PropTypes from "prop-types";

const CategoriesTable = (props) => {
    const { categories, onDelete, onEdit } = props;

    return (
        <table className="table table-sm">
            <thead className="thead-dark">
                <tr>
                    <th className="text-center">ID</th>
                    <th>Category Name</th>
                    <th className="text-center">Options</th>
                </tr>
            </thead>

            <tbody>
                {categories.map((category) => (
                    <tr key={category.id}>
                        <td className="text-center">{category.id}</td>
                        <td>{category.category_name}</td>
                        <td className="text-center">
                            <button
                                onClick={() => onEdit(category.id)}
                                className="btn btn-sm btn-primary"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() =>
                                    onDelete("category", category.id)
                                }
                                className="btn btn-sm btn-danger ml-2"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

CategoriesTable.propTypes = {
    categories: PropTypes.array,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
};

export default CategoriesTable;
