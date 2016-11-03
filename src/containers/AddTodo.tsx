import AddTodoForm from '../components/AddTodoForm'

import { connect } from 'react-redux'
import { addTodo } from '../actions/index'


const mapDispatchToProps = (dispatch: any): any => {
  return {
    onSubmit: (text: string) => {
      dispatch(addTodo(text))
    }
  }
}

let AddTodo = connect((state: any) => ({}), mapDispatchToProps)(AddTodoForm)

export default AddTodo
