import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; //
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> Home</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}> Create</NavLink>
        <NavLink to="/help" activeClassName="is-active" exact={true}> Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);