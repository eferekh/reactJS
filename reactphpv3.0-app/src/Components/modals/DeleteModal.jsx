const DeleteModal = (props) => {
    const { show, message, type, id, onHide } = props;

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={() => onHide("")}
            animation={true}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter text-danger">
                    Alert
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => onDelete(type, id)}>Yes</Button>
                <Button onClick={() => onHide("")}>No</Button>
            </Modal.Footer>
        </Modal>
    );
};

DeleteModal.propTypes = {
    show: PropTypes.bool,
    message: PropTypes.string,
    onHide: PropTypes.func,
};

DeleteModal.defaultProps = {
    show: false,
    message: "",
    onHide: () => console.log("On Hide Function Not Defined In Alert Modal."),
};

export default DeleteModal;
