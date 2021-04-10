import { PropTypes } from "prop-types";
import { Modal, Button } from "react-bootstrap";

const AlertModal = (props) => {
    const { show, message, onHide } = props;

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
                <Modal.Title id="contained-modal-title-vcenter">
                    Alert
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => onHide("")}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

AlertModal.propTypes = {
    show: PropTypes.bool,
    message: PropTypes.string,
    onHide: PropTypes.func,
};

AlertModal.defaultProps = {
    show: false,
    message: "",
    onHide: () => console.log("On Hide Function Not Defined In Alert Modal."),
};

export default AlertModal;
