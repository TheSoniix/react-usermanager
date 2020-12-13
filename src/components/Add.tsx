import React, {ChangeEvent, FormEvent} from "react";
import {Button, Form} from "react-bootstrap";

export class Add extends  React.Component<{onCreate: (firstname: string, secondname: string, description: string) => void}, {firstname: string, secondname: string, description: string}> {
    constructor(props: {onCreate: (firstname: string, secondname: string, description: string) => void}) {
        super(props);
        this.state = {
            firstname: '',
            secondname: '',
            description: ''
        }
    }
    handleChangeFirstname(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        this.setState(() => ({firstname: event.target.value}));
        console.log(event.target.value)
    }

    handleChangeSecondname(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        this.setState({secondname: event.target.value});
    }
    handleChangeDescription(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        this.setState({description: event.target.value});
    }
    handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.onCreate(this.state.firstname, this.state.secondname, this.state.description);
        this.setState({firstname: '', secondname: '', description: ''})
    }

    render() {
        return <div>
            <h4 className="m-1">Add a new User</h4>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Control value={this.state.firstname}
                              onChange={(e) => this.handleChangeFirstname(e)}
                              type="text" className="m-1" placeholder="Firstname"/>
                <Form.Control value={this.state.secondname}
                              onChange={(e) => this.handleChangeSecondname(e)}
                              type="text" className="m-1" placeholder="Secondname"/>
                <Form.Control value={this.state.description}
                              onChange={(e)=> this.handleChangeDescription(e)}
                              as="textarea" className="m-1" placeholder="Description"/>
                <Button className="btn btn-success m-1" type="submit">Add</Button>
            </Form>
        </div>;
    }

}

export default Add;
