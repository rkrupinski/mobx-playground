import { observable, asMap, action, computed } from 'mobx';

import TodoModel from './todoModel';

export default class State {

  @observable _todos = asMap({});

  @action addTodo(body) {
    const { id, todo } = TodoModel.create(body);

    this._todos.set(id, todo);
  }

  @computed get todos() {
    return this._todos.keys().map(key => this._todos.get(key));
  }

}
