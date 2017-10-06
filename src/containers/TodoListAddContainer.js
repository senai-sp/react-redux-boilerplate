import { connect } from 'react-redux';
import {actions as todolistActions} from '../reducers/TodoListReducer';
import {actions as todoActions} from '../reducers/TodoReducer';
import TodoListAddModal from "../components/TodoListAddModal/index";


const mapDispatchToProps = {
    ...todolistActions,
    ...todoActions
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListAddModal);
