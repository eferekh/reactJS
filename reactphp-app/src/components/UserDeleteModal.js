import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class UserDeleteModal extends Component {
    render() {
        const { userId, showUserDeleteModal, setShowUserDeleteModal } = this.props;

        return (
            <Modal centered show={showUserDeleteModal} onHide={setShowUserDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">Alert</Modal.Title>
                </Modal.Header>

                <Modal.Body>Are you sure you want to delete this user ?</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={setShowUserDeleteModal}>
                        Close
                    </Button>

                    <Button variant="danger" onClick={() => this.props.onDelete(userId)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default UserDeleteModal;
