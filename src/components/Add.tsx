import React, {ChangeEvent} from "react";
import {Button, Form} from "react-bootstrap";

export class Add extends  React.Component<{title: string, test: string},  {value: string}> {
    constructor(props: {title: string, test: string}) {
        super(props);
        this.state = {
            value: this.props.title,
        }
    }
    handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        this.setState({value: event.target.value})
    }

    render() {
        return <div>
            <h3 className="m-1">New User {this.props.test}</h3>
            <Form>
                <Form.Control value={this.state.value}
                              onChange={(e) => this.handleChange(e)}
                              type="text" className="m-1"/>
                <Form.Control placeholder="Secondname" className="m-1"/>
                <Form.Control as="textarea" placeholder="Description" className="m-1"/>
                <Button className="btn btn-success m-1">Add</Button>
            </Form>
        </div>;
    }

}

export default Add;
