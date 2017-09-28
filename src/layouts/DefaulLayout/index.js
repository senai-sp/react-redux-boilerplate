import React from 'react';
import {Link, Route} from 'react-router-dom';
import "./style.scss";

export const DefaultLayout = ({ component: Component, path, exact }) => (
    <Route exact={exact} path={path} render={matchProps => (
        <div id="app" className="app">
            <header className="navbar">
                <div className="container">
                    <h1 className="logo"><Link to="/" title="TodoList">TodoList</Link></h1>
                    <nav>
                        <ul className="navbar-list">
                            <li><Link to="/" activeClassName="active" >Home</Link></li>
                            <li><Link to="/contact" activeClassName="active" >Contact</Link></li>
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
