import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavTabs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="nav">
                <Link to="/">
                    <i className="fas fa-home " ></i>
                </Link><br></br>
                <Link to="/add">
                    <i className="fas fa-calendar-alt " ></i>
                </Link><br></br>
                <Link to="/list">
                    <i className="fas fa-th-list " ></i>
                </Link>
            </nav>
        );
    }
}
export default NavTabs;