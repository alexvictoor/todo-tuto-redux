import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../reducers'
import AddTodoForm from '../components/AddTodoForm'
import { addTodo } from '../actions/index'


const mapDispatchToProps = undefined; // there is something to do here



const AddTodo = connect((state: AppState) => ({}), mapDispatchToProps)(AddTodoForm)

export default AddTodo
