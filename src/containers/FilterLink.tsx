import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../reducers'
import { setVisibilityFilter } from '../actions/index'
import Link from '../components/Link'

const mapStateToProps = (state: AppState, ownProps: any) => {
  return {
   
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {

  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
