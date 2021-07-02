import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import store, { IState } from '../Store';
import { boundMethod } from 'autobind-decorator';
import Nav from 'react-bootstrap/Nav';
import { IUser } from '../reducers/user';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export interface IHeaderProps {
    user: IUser;
}

export class HeaderComponent extends React.Component<IHeaderProps> {
    @boundMethod
    private onClick(): void {
        store.dispatch({
            type: 'login',
            data: true,
        });
    }

    private renderUserInfo(): React.ReactNode {
        if (this.props.user.loggedIn) {
            return <FontAwesomeIcon icon={faUserCircle}/>;
        }

        return (
            <Button onClick={this.onClick}>Login</Button>
        );
    }

    public render(): React.ReactNode {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto ">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                {this.renderUserInfo()}
            </Navbar>
        );
    }
}

export default connect((state: IState): IHeaderProps => ({
    user: state?.user ?? null,
}))(HeaderComponent);
