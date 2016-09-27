import { observable, asMap, action, computed, reaction } from 'mobx';

import { saveState } from './utils';
import TodoModel from './todoModel';

export default class State {

  @observable _todos;

  @action addTodo(body) {
    const todo = new TodoModel(body);

    this._todos.set(todo.id, todo);
  }

  @computed get todos() {
    return this._todos.keys().map(key => this._todos.get(key));
  }

  toJS() {
    return this._todos.keys().reduce((acc, curr) => {
      const todo = this._todos.get(curr).toJS();

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
