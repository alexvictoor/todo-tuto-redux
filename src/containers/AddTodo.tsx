import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../reducers'
import AddTodoForm from '../components/AddTodoForm'
import { addTodo } from '../actions/index'


const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onSubmit: (text: string) => {
      dispatch(addTodo(text))
    }
  }
}

const AddTodo = connect((state: AppState) => ({}), mapDispatchToProps)(AddTodoForm)

export default AddTodo
