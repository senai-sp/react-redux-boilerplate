import {schema} from 'normalizr';

export const todoEntity = new schema.Entity('todos');
export const todolistEntity = new schema.Entity('todolists', {
    todos: [todoEntity]
});
