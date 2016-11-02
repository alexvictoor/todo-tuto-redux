import { 
  createStore as reduxCreateStore, 
  applyMiddleware, 
  combineReducers, 
  ReducersMapObject, 
  Store 
} from "redux";

import clock from "./clock"

export interface AppState {
  clock: Date,
  // more sub states related to reducers here
}

export const createStore = (initialState : any) : Store<AppState> => {
  const reducer = combineReducers(
    { 
      clock,
      // more reducers here! ...
    }
  );
  const store 
    = reduxCreateStore(
        reducer, 
        initialState, 
        (window as any).devToolsExtension && (window as any).devToolsExtension()
      );

  return store as Store<AppState>
}

