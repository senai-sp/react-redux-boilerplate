import { combineReducers } from 'redux';
import TodoListReducer from "./TodoListReducer";

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        todolists: TodoListReducer,
        ...asyncReducers
    })
};

export default makeRootReducer;
