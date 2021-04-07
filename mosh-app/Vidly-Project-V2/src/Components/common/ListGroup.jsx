const ListGroup = (props) => {
    const { items, textProperty, valueProperty, onItemSelect } = props;

    return (
        <>
            <ul className="list-group">
                {items.map((item) => (
                    <li onClick={() => onItemSelect(item)} key={item[valueProperty]} className="list-group-item">
                        {item[textProperty]}
                    </li>
                ))}
            </ul>
        </>
    );
};

ListGroup.defaultProps = {
    "valueProperty": "_id",
    "textProperty": "name"
};

export default ListGroup;
