import React from 'react';
import {Button, Modal} from "react-bootstrap";

export class Edit2 extends React.Component<{ modalTest: boolean }, {show: boolean}> {
    constructor(props: { modalTest: boolean }) {
        super(props);
        this.state = {
            show: this.props.modalTest
        };
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>Edit2</Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit2</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Edit2;
