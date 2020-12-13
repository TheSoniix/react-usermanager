import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

function Edit(props: {title: string, modalTest: boolean}) {
    const [show, setShow] = useState(props.modalTest);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const derTitel = useState(props.title);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit {derTitel}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Edit;
