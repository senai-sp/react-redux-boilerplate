import { connect } from 'react-redux';
import {addTodoList} from '../reducers/TodoListReducer';
import TodoListScreen from "../screens/TodoListScreen/index";

const mapDispatchToProps = {
    addTodoList
};

const mapStateToProps = state => ({
    todolists: state.todolists
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen);
