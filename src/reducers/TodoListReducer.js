// ------------------------------------
// Constants
// ------------------------------------
import {requestDelete, requestGet, requestPost, requestPut} from "../modules/api";

export const LIST_TODOLIST = 'LIST_TODOLIST';
export const ADD_TODOLIST = 'ADD_TODOLIST';
export const UPDATE_TODOLIST = 'UPDATE_TODOLIST';
export const DELETE_TODOLIST = 'DELETE_TODOLIST';

// ------------------------------------
// Actions
// ------------------------------------
export function listTodoList () {
    return (dispatch, getState) => {
        return requestGet(`todolists`)
            .then( todolists => {
                dispatch({
                    type    : LIST_TODOLIST,
                    payload : todolists
                });
                resolve();
            });
    }
}

export function addTodoList (todolist) {
    return (dispatch, getState) => {
        return requestPost(`todolists`, todolist)
            .then( todolist => {
                dispatch({
                    type    : ADD_TODOLIST,
                    payload : todolist
                });
                resolve();
            });
    }
}

export const updateTodoList = (todolist_id, todolist) => {
    return (dispatch, getState) => {
        return requestPut(`todolists/${todolist_id}`, todolist)
            .then( todolist => {
                dispatch({
                    type    : UPDATE_TODOLIST,
                    payload : todolist
                });
                resolve();
            });
    }
};

export const deleteTodoList = (todolist_id) => {
    return (dispatch, getState) => {
        return requestDelete(`todolists/${todolist_id}`, todolist)
            .then( todolist => {
                dispatch({
                    type    : DELETE_TODOLIST,
                    payload : todolist_id
                });
                resolve();
            });
    }
};


export const actions = {
    listTodoList,
    addTodoList,
    updateTodoList,
    deleteTodoList
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [LIST_TODOLIST] : (state, action) => {
        return Object.assign({}, state, {
            items: action.payload
        })
    },
    [ADD_TODOLIST] : (state, action) => {
        return Object.assign({}, state, {
            items: [
                action.payload,
                ...state.items
            ]
        })
    },
    [UPDATE_TODOLIST] : (state, action) => {
        return Object.assign({}, state, {
            items: state.items.map(item => (action.payload.id == item.id )? action.payload : item)
        })
    },
    [DELETE_TODOLIST] : (state, action) => {
        return Object.assign({}, state, {
            items: state.items.filter(item => item.id != action.payload)
        })
    }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    items: [],
    lastUpdate: null
};

export default function TodoListReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
