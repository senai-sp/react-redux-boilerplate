import { combineReducers } from 'redux';
import TodoListReducer from "./TodoListReducer";
import TodoReducer from "./TodoReducer";

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        todolists: TodoListReducer,
        todos: TodoReducer,
        ...asyncReducers
    })
};

export default makeRootReducer;
