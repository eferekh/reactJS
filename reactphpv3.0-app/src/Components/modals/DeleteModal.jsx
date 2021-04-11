import React, { Component } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

class DeleteModal extends Component {
    onDelete = (type, id) => {
        if (type === "product") this.deleteProduct(id);
    };

    deleteProduct = async (productId) => {
        const formData = new FormData();
        formData.append("productId", productId);

        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/deleteProduct`,
            method: "POST",
            data: formData,
        });

        const data = httpReq.data;
        const flag = data[0];

        if (flag === -1) {
            const errorMsg = data[1];
            this.props.alert(errorMsg);
        } else {
            this.props.onHide();
        }
    };

    render() {
        const { show, type, id, message, onHide } = this.props;

        return (
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={() => onHide("")}
                animation={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="text-danger">
                        Alert
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.onDelete(type, id)} className="btn btn-danger btn-sm">Yes</Button>
                    <Button onClick={() => onHide("")} className="btn btn-primary btn-sm">No</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

DeleteModal.propTypes = {
    show: PropTypes.bool,
    message: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    onHide: PropTypes.func,
};

DeleteModal.defaultProps = {
    show: false,
    message: "",
    id: "-1",
    type: "",
    onHide: () => console.log("On Hide Function Not Defined In Alert Modal."),
};

export default DeleteModal;
