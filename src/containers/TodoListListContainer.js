import { connect } from 'react-redux';
import {actions as todolistActions} from '../reducers/TodoListReducer';
import {actions as todoActions} from '../reducers/TodoReducer';
import TodoListList from "../components/TodoListList/index";


const mapDispatchToProps = {
    ...todolistActions,
    ...todoActions
};

const mapStateToProps = state => ({
    todolists: state.todolists,
    todos: state.todos
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListList);
