import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AlertModal extends Component {
    render() {
        const { showAlertModal, setShowAlertModal, message } = this.props;

        return (
            <Modal centered show={showAlertModal} onHide={setShowAlertModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">Alert</Modal.Title>
                </Modal.Header>

                <Modal.Body>{message}</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={setShowAlertModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AlertModal;
