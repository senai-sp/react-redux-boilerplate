import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import "./style.scss";
import {BrowserRouter, Switch} from "react-router-dom";

import DefaultLayout from "../../layouts/DefaulLayout/index";
import ContactScreen from "../../screens/ContactScreen/index";
import TodoListScreen from "../../screens/TodoListScreen/index";


class App extends Component{
    static propTypes = {
        store: PropTypes.object.isRequired
    };
    render(){
        return(
            <Provider store={this.props.store}>
                <BrowserRouter>
                    <Switch>
                        <DefaultLayout path="/" exact component={TodoListScreen} />
                        <DefaultLayout path="/contact" exact component={ContactScreen} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default App;
