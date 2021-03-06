import { observable, asMap, action, computed, reaction } from 'mobx';

import { saveState } from './utils';
import TodoModel from './todoModel';

export default class State {

  @observable _todos;
  @observable _beingEdited = '';

  @action('add todo') addTodo(body) {
    const todo = new TodoModel(body);

    this._todos.set(todo.id, todo);
  }

  @action('remove todo') removeTodo(id) {
    this._todos.delete(id);
  }

  @action('start editing') startEditing(id) {
    this._beingEdited = id;
  }

  @action('done editing') doneEditing() {
    this._beingEdited = '';
  }

  @action('clear completed') clearCompleted() {
    this.todos.forEach(({ completed, id }) =>
        completed && this._todos.delete(id));
  }

  @computed get todos() {
    return this._todos.keys().map(key => this._todos.get(key));
  }

  @computed get todoCount() {
    return this.todos.length;
  }

  @computed get completedCount() {
    return this.todos.filter(({ completed }) => completed).length;
  }

  @computed get beingEdited() {
    return this._beingEdited;
  }

  toggleAll() {
    const pending = this.todos.some(({ completed }) => !completed);

    this._todos.forEach(todo => todo.toggle(pending));
  }

  toJS() {
    return this.todos.reduce((acc, curr) => {
      const todo = curr.toJS();

      return { ...acc, [todo.id]: todo };
    }, {});
  }

  constructor(initialState = {}) {
    this._todos = asMap(Object.keys(initialState).reduce((acc, curr) => {
      const { body, id, completed } = initialState[curr];

      return { ...acc, [id]: new TodoModel(body, id, completed) };
    }, {}));

    reaction(this.toJS.bind(this), saveState);
  }
}
