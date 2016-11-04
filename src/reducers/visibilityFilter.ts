import { Action } from "redux";
import { SetVisibilityFilterAction } from "../actions"

const visibilityFilter = (state = 'SHOW_ALL', action: Action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER': {
      const { filter } = action as SetVisibilityFilterAction
      return filter;
    }
    default:
      return state
  }
}

export default visibilityFilter
