import React from 'react';
import {Col, Container, Nav, Navbar,  Row} from 'react-bootstrap';
import './App.css';
import {User} from "./model/User";
import Add from "./components/Add";
import Userlist from "./components/Userlist";
import Edit2 from "./components/Edit2";
import {BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom'


class App extends React.Component<{}, { title: string, userlist: User[], modal: boolean, modalId: number, modalFirstname: string, modalSecondname: string, modalDescription: string }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            title: 'React-Usermanager',
            userlist: [
                new User('Angelina', 'Schartner', 'Die schönste!'),
                new User('Julian', 'Scheffler', 'Der coolste!'),
                new User('Katrin', 'Scheffler', 'Die beste!')
            ],
            modal: false,
            modalId: 0,
            modalFirstname: '',
            modalSecondname: '',
            modalDescription: '',
        }
    }

    add(firstname: string, secondname: string, description: string) {
        this.setState(state => ({
            userlist: [...state.userlist, new User(firstname, secondname, description)]
        }))
    };

    delete(user: User) {
        const index = this.state.userlist.indexOf(user, 0);
        const currArr = this.state.userlist
        currArr.splice(index, 1);
        this.setState(() => ({
            userlist: currArr
        }));
    }

    openEdit(user: User) {
        this.setState(state => ({
            modal: true,
            modalId: user.id,
            modalFirstname: user.firstname,
            modalSecondname: user.secondname,
            modalDescription: user.description
        }));
    }

    closeEdit() {
        this.setState({modal: false});
    }

    save(id: number, fName: string, sName: string, des: string) {
        this.setState(state => ({
            modal: false,
            userlist: this.state.userlist.map(user =>
                user.id === id ? {...user, firstname: fName, secondname: sName, description: des} as User : user
            )
        }))
    }

    render() {
        return <div>
            <Router>
                <Navbar bg='dark'>
                    <Navbar.Brand className="text-light">
                        {this.state.title}
                    </Navbar.Brand>
                    <Nav className="nav-links">
                        <Nav.Link>
                            <NavLink to="/userlist" activeClassName="selected" activeStyle={{color: "white"}} className="links">
                                Userlist
                            </NavLink>
                        </Nav.Link>


                        <Nav.Link>
                            <NavLink to="/add" activeClassName="selected" activeStyle={{color: "white"}} className="links">
                                Add
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar>

                <Switch>
                    <Route path="/userlist">
                        <Container>
                            <Row>
                                <Userlist users={this.state.userlist} onDelete={(user) => this.delete(user)}
                                          onEdit={(user: User) => this.openEdit(user)}/>
                            </Row>
                        </Container>


                    </Route>
                    <Route path="/add">
                        <Container>
                            <Row className="justify-content-center">
                                <div className="w-50">
                                    <Add onCreate={(firsname, secondname, description) => this.add(firsname, secondname, description)}/>
                                </div>

                            </Row>
                        </Container>


                    </Route>


                </Switch>

            </Router>


            <Edit2 onClose={() => this.closeEdit()}
                   modal={this.state.modal} modalId={this.state.modalId}
                   modalFn={this.state.modalFirstname}
                   modalSn={this.state.modalSecondname}
                   modalDc={this.state.modalDescription}
                   onSubmit={(id, fName, sName, des) => this.save(id, fName, sName, des)}/>

        </div>
    }
}

export default App;
