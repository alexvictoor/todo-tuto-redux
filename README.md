# Getting started with Redux in 5 steps

This tutorial is strongly inspired from [this article](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.mqfj2iq1o).
The code is the one from official redux todolist, translated to TypeScript.

## Step 0 - check the installation
Install everything with npm and aunch webpack-dev-server   
You will also need the redux dev tools in your favorite browser

## Step 1 - dispatch "add todo" actions
An AddTodoForm component has already been written. However this component is not (yet) connected to the redux store.
Hence it cannot dispatch actions...  

'connect' method from react-redux expect a "map state to props" and a "map dispatch to props" function.
"map state to props" is a function that takes as a parameter the redux state and generates props (for the connected react component).
"map dispatch to props" is a function that takes as a parameter the redux action dispatch function to inject it in the props of the connected react component.

Here we only need "map dispatch to props". You need to complete the AddTodo component. It is a kind of decorator of AddTodoForm, this kind of components are called *higher order components* by the React community. 
Anyway use the following code fragment to get a properly working component:

containers/AddTodo.tsx
```
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onSubmit: (text: string) => {
      dispatch(addTodo(text))
    }
  }
}
```

Once your component is ready, add it to components/App.tsx  
To check that actions are dispatched properly open redux dev tools.

## Step 2 - your first reducer

In todos.ts you will find a reducer skeleton. It is your lucky
 day, there are already failing tests (todos.spec.ts). They're waiting for you to fix them!

**Tips**
Remember that reducers are supposed to be pure functions (no side effects).   
Also when adding a todo item, it should return a new array instance, not updating the existing one. 
Hence es6 rest operator (...) is your friend. 

## Step 3 - mapping state to props
With redux dev tools you can have a look to the redux store and check that the reducer 
(the one you have just fixed) generates more and more todos.  
We will now display these todos leveraging on existing TodoList component.
To build a Todolist component you need to:
- create a VisibleTodoList.tsx file in the containers folder
- import the TodoList component
- import react-redux connect function
- apply this connect method using a "map state to props" function on TodoList

Obviously you can copy/paste most of the content of AddTodo.tsx
Below a hint on "map state to state" signature:  
```
const mapStateToProps = (state: AppState) => {
  return { 

    // ???

  }
}
```  

Once your new VisibleTodoList is ready, you can use it in App.tsx  

# Step 4 - toggle todos
We will now implement todos toggling. Clicking on a todo item will toggle its completed status.
First thing to  do is to update your VisibleTodoList component in order to connect it to redux using a "dispatch to props" function.
Once this is done you can check with redux dev tools that toggle actions are actually dispatched.

Now you need to update the todos reducer. Again you are a lucky developer since a bunch of tests are already waiting for you to be fixed (todos.spec.ts Step4 prefixed tests) 

**Tips**
You should consider todos item are immutable objects (a reducer does not update the state, it creates a new one). 
Hence [Object.assign() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) can be very handy.

# Step 5 - filters
In the final step we will implement footer filter links.  
Add the footer component (components/Footer.tsx) to your page (components/App.tsx)
To make filters work you need to:
- connect properly FilterLink.tsx (fill the gaps)
- implement a new reducer (reducers/visibilityFilter.ts)
- update the redux store instantiation (reducers/index.ts)  
- and finaly update "map state to props" function of VisibleTodoList component in order to display all, completed or only active todos.

That's all folks!

# Disclaimer
This hand's on covers the basics of redux. However some important aspects of redux are missing: middlewares and selectors.
If you want to dig deeper those topics Dan Abramov egghead videos are highly recommended:  
- [Getting started with redux](https://egghead.io/courses/getting-started-with-redux)
- [Building react applications with idiomatic redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)