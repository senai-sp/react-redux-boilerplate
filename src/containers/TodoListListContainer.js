import { connect } from 'react-redux';
import {actions} from '../reducers/TodoListReducer';
import TodoListList from "../components/TodoListList/index";


const mapDispatchToProps = {
    ...actions
};

const mapStateToProps = state => ({
    todolists: state.todolists
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListList);
