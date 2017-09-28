import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import thunk from "redux-thunk";
import makeRootReducer from "../reducers/index";

const createStore = (initialState = {}) => {
    const middleware = [thunk];
    const store = createReduxStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware)
        )
    );
    return store;
};
export default createStore;
