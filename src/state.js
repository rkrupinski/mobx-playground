import { observable, asMap, action, computed } from 'mobx';
import { v4 } from 'node-uuid';

export default class State {

  @observable _todos = asMap({});

  @action addTodo(body) {
    const id = v4();

    this._todos.set(id, body); // Todo
  }

  @computed get todos() {
    return this._todos.keys().map(key => this._todos.get(key));
  }

}
