import React from 'react';
import {Link, Route} from 'react-router-dom';
import "./style.scss";

export const DefaultLayout = ({ component: Component, path, exact }) => (
    <Route exact={exact} path={path} render={matchProps => (
        <div id="app" className="app">
            <header className="navbar">
                <div className="container">
                    <h1 className="logo"><a href="#" title="TodoList">TodoList</a></h1>
                    <nav>
                        <ul className="navbar-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="content">
                <Component {...matchProps} />
            </div>
        </div>
    )}
    />
);

export default DefaultLayout;
