import { Action } from "../actions";

const visibilityFilter = (state = 'SHOW_ALL', action: Action<string>) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload;
    default:
      return state
  }
}

export default visibilityFilter
