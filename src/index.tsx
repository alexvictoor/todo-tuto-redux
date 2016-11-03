import * as React from "react";
import { createStore } from 'redux'
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from "./components/App";
import todoApp from './reducers';

const store = createStore(todoApp, {}, (window as any).devToolsExtension && (window as any).devToolsExtension());

ReactDOM.render((
     <Provider store={ store }>
        <App  />
     </Provider>
     ),
     document.getElementById("main") as HTMLElement
);