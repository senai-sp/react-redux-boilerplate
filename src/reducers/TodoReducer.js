// ------------------------------------
// Constants
// ------------------------------------
import { requestDelete, requestPost, requestPatch } from "../modules/api";

export const LIST_TODO = 'LIST_TODO';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// ------------------------------------
// Actions
// ------------------------------------

export function addTodo (todolist_id, todo) {
    return (dispatch, getState) => {
        return requestPost(`todolists/${todolist_id}/todos`, todo)
            .then( todo => {
                dispatch({
                    type    : ADD_TODO,
                    payload : todo
                });
            });
    }
}

export const updateTodo = (todo_id, todo) => {
    return (dispatch, getState) => {
        return requestPatch(`todos/${todo_id}`, todo)
            .then( todo => {
                dispatch({
                    type    : UPDATE_TODO,
                    payload : todo
                });
            });
    }
};

export const deleteTodo = (todo_id) => {
    return (dispatch, getState) => {
        return requestDelete(`todos/${todo_id}`)
            .then( todolist => {
                dispatch({
                    type    : DELETE_TODO,
                    payload : todo_id
                });
            });
    }
};


export const actions = {
    addTodo,
    updateTodo,
    deleteTodo
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [LIST_TODO] : (state, {payload}) => {
        return {
            ...state,
            items: payload
        }
    },
    [ADD_TODO] : (state, {payload}) => {
        return {
            //TODO
        }
    },
    [UPDATE_TODO] : (state, {payload}) => {
        return {
            todos: null //TODO: state.todos.map(todo => (action.payload.id == todo.id )? action.payload : item)
        }
    },
    [DELETE_TODO] : (state, {payload}) => {
        return {
            //TODO
        }
    }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    items: {}
};

export default function TodoReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
