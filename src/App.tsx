import React from 'react';
import {Container, Navbar, Row} from 'react-bootstrap';
import './App.css';
import {User} from "./model/User";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Userlist from "./components/Userlist";
import Edit2 from "./components/Edit2";

class App extends React.Component<{}, { title: string, userlist: User[], modalTest: boolean, test: string }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            title: 'React-Usermanager',
            userlist: [
                new User('Angelina', 'Schartner', 'Die schönste!'),
                new User('Julian', 'Scheffler', 'Der coolste!'),
                new User('Katrin', 'Scheffler', 'Die beste!')
            ],
            modalTest: true,
            test: 'Test'
        }
    }

    change = () => this.setState({test: 'wuhu'})


    render() {
        return <div>
            <Navbar bg='dark'>
                <Navbar.Brand className="text-light">
                    {this.state.title}
                </Navbar.Brand>
            </Navbar>

            <button className="btn btn-info" onClick={this.change}>Test</button>

            <Container>
                <Row>
                    <div className="w-50 m-auto">
                        <Add title={this.state.title} test={this.state.test}/>
                    </div>

                </Row>
                <Row>
                    <Edit title={this.state.title} modalTest={this.state.modalTest}/>
                    <Edit2 modalTest={this.state.modalTest}/>
                </Row>
                <Row>
                    <Userlist users={this.state.userlist}/>
                </Row>
            </Container>


        </div>
    }
}

export default App;
