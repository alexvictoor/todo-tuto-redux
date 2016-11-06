import { expect } from "chai";
import { addTodo, toggleTodo, setVisibilityFilter } from "../actions";
import todos, { TodoItem } from "./todos"

describe('STEP2 - Todos reducer', () => {

  it.skip('should add a todo on default todos', () => {
    // given
    const action = addTodo("learn typescript");
    // when
    const newState = todos(undefined, action);
    // then
    expect(newState).to.have.length(1);
    expect(newState[0].text).to.equal(action.text);
  });

  it.skip('should add a non completed todo on todos', () => {
    // given
    const action = addTodo("learn redux");
    // when
    const newState = todos([{id:0, text: "learn es6", completed: true }], action);
    // then
    expect(newState).to.have.length(2);
    expect(newState[1].text).to.equal(action.text);
    expect(newState[1].completed).to.be.false;
  });

  it.skip('should return a new array when adding a todo', () => {
    // given
    const action = addTodo("learn redux");
    const existingTodos = [{id:0, text: "learn es6", completed: true }];
    // when
    const newState = todos(existingTodos, action);
    // then
    expect(existingTodos).to.have.length(1);
    expect(newState).to.have.length(2);
  });

  it.skip('should handle any action type', () => {
    // given
    const action = { type: "@@WEIRD@@" };
    const existingTodos = [{id:0, text: "learn es6", completed: true }];
    // when
    const newState = todos(existingTodos, action);
    // then
    expect(newState).to.be.deep.equal(existingTodos);
  });
  
});

describe('STEP4 - Todos reducer', () => {

  it.skip('should toggle a todo', () => {
    // given
    const existingTodos = [{id:0, text: "learn redux", completed: false }];
    const action = toggleTodo(0);
    // when
    const newState = todos(existingTodos, action);
    // then
    expect(newState[0].text).to.equal("learn redux");
    expect(newState[0].completed).to.be.true;
  });

  it.skip('should not toggle a todo with different id', () => {
    // given
    const existingTodos = [
      {id:0, text: "learn typescript", completed: true }, 
      {id:1, text: "learn redux", completed: true }
    ];
    const action = toggleTodo(1);
    // when
    const newState = todos(existingTodos, action);
    // then
    expect(newState[0].text).to.equal("learn typescript");
    expect(newState[0].completed).to.be.true;
  });

});