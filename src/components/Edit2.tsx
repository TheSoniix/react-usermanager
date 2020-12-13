import React, {ChangeEvent, FormEvent} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

export class Edit2 extends React.Component<{
    onClose: () => void,
    onSubmit: (id: number, fName: string, sName: string, des: string) => void,
    modal: boolean, modalId: number, modalFn: string, modalSn: string, modalDc: string
},
    { show: boolean, userId: number, userFn: string, userSn: string, userDc: string }> {


    constructor(props: {
        onClose: () => void, onSubmit: (id: number, fName: string, sName: string, des: string) => void,
        modal: boolean, modalId: number, modalFn: string, modalSn: string, modalDc: string
    }) {
        super(props);
        this.state = {
            show: false,
            userId: props.modalId,
            userFn: props.modalFn,
            userSn: props.modalSn,
            userDc: props.modalDc
        };
    }

    shouldComponentUpdate(nextProps: Readonly<{ modal: boolean, modalId: number, modalFn: string, modalSn: string, modalDc: string }>,
                          nextState: Readonly<{ show: boolean, userId: number, userFn: string, userSn: string, userDc: string }>, nextContext: any): boolean {
        if (this.state.show !== nextProps.modal) {
            this.setState(state => ({
                show: nextProps.modal,
                userId: nextProps.modalId,
                userFn: nextProps.modalFn,
                userSn: nextProps.modalSn,
                userDc: nextProps.modalDc
            }));
            return true
        } else if (this.state.userFn !== nextState.userFn || this.state.userSn !== nextState.userSn || this.state.userDc !== nextState.userDc) {
            this.setState(state => ({
                userFn: nextState.userFn,
                userSn: nextState.userSn,
                userDc: nextState.userDc
            }))
            return true
        } else {
            return false
        }
    }


    handleChangeFirstname(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        this.setState({userFn: event.target.value});
        console.log(event.target.value)
    };

    handleChangeSecondname(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        this.setState({userSn: event.target.value});
        console.log(event.target.value)
    };

    handleChangeDescription(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        this.setState({userDc: event.target.value});
        console.log(event.target.value)
    };

    handleClose = () => this.props.onClose();

    handleEdit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        this.props.onSubmit(this.state.userId, this.state.userFn, this.state.userSn, this.state.userDc)
        this.setState({userFn: '', userSn: '', userDc: ''})
    }


    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit {this.state.userFn}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => this.handleEdit(e)}>
                            <Form.Group>
                                <Form.Label>Id</Form.Label>
                                <Form.Control disabled value={this.state.userId}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control value={this.state.userFn}
                                              onChange={(e) => this.handleChangeFirstname(e)}
                                              type="text"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Secondname</Form.Label>
                                <Form.Control value={this.state.userSn}
                                              onChange={(e) => this.handleChangeSecondname(e)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" value={this.state.userDc}
                                              onChange={(e) => this.handleChangeDescription(e)}/>

                            </Form.Group>


                            <Modal.Footer>
                                <Button variant="success" type="submit">
                                    Save
                                </Button>
                                <Button variant="dark" onClick={this.handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>

                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Edit2;
