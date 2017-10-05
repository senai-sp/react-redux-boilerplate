// ------------------------------------
// Constants
// ------------------------------------
import { requestDelete, requestGet, requestPost, requestPatch } from "../modules/api";
import { normalize } from "normalizr";
import { todolistEntity } from '../modules/entities';
import {LIST_TODO} from "./TodoReducer";

export const LIST_TODOLIST = 'LIST_TODOLIST';
export const ADD_TODOLIST = 'ADD_TODOLIST';
export const UPDATE_TODOLIST = 'UPDATE_TODOLIST';
export const DELETE_TODOLIST = 'DELETE_TODOLIST';

export const UPDATE_TODO = 'DELETE_TODO';

// ------------------------------------
// Actions
// ------------------------------------
export function listTodoList () {
    return (dispatch, getState) => {
        return requestGet(`todolists`)
            .then( todolists => {
                const entities = normalize(todolists, [ todolistEntity ]).entities;
                dispatch({
                    type    : LIST_TODOLIST,
                    payload : entities.todolists
                });
                dispatch({
                    type    : LIST_TODO,
                    payload : entities.todos
                });
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
            });
    }
}

export const updateTodoList = (todolist_id, todolist) => {
    return (dispatch, getState) => {
        return requestPatch(`todolists/${todolist_id}`, todolist)
            .then( todolist => {
                dispatch({
                    type    : UPDATE_TODOLIST,
                    payload : todolist
                });
            });
    }
};

export const deleteTodoList = (todolist_id) => {
    return (dispatch, getState) => {
        return requestDelete(`todolists/${todolist_id}`)
            .then( todolist => {
                dispatch({
                    type    : DELETE_TODOLIST,
                    payload : todolist_id
                });
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
    [LIST_TODOLIST] : (state, {payload}) => {
        return {
            ...state,
            items: payload
        }
    },
    [ADD_TODOLIST] : (state, {payload}) => {
        const newState = Object.assign(state,{});
        newState[payload.id] = payload;
        return newState;
    },
    [UPDATE_TODOLIST] : (state, {payload}) => {
        const newState = Object.assign(state,{});
        newState[payload.id] = payload;
        return newState;
    },
    [DELETE_TODOLIST] : (state, {payload}) => {
        const newState = Object.assign(state,{});
        delete newState[payload.id];
        return newState;
    }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    items: {},
    updatedAt: null
};

export default function TodoListReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
