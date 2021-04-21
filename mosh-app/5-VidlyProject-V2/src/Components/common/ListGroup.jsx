const ListGroup = (props) => {
    const {
        items,
        selectedItem,
        textProperty,
        valueProperty,
        onItemSelect,
    } = props;

    return (
        <>
            <ul className="list-group">
                {items.map((item) => (
                    <li
                        key={item[valueProperty]}
                        onClick={() => onItemSelect(item)}
                        className={
                            item === selectedItem
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                    >
                        {item[textProperty]}
                    </li>
                ))}
            </ul>
        </>
    );
};

ListGroup.defaultProps = {
    valueProperty: "_id",
    textProperty: "name",
};

export default ListGroup;
