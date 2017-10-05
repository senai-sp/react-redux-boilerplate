import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import "./style.scss";

export const DefaultLayout = ({ component: Component, path, exact }) => (
    <Route exact={exact} path={path} render={matchProps => (
        <div id="app" className="app">
            <header className="navbar">
                <div className="container">
                    <h1 className="logo"><NavLink to="/" title="TodoList">TodoList</NavLink></h1>
                    <nav>
                        <ul className="navbar-list">
                            <li><NavLink to="/" exact activeClassName="active" >Home</NavLink></li>
                            <li><NavLink to="/contact" exact activeClassName="active" >Contact</NavLink></li>
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
