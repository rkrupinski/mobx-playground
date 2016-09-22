import { v4 } from 'node-uuid';

import { observable, action } from 'mobx';

export default class TodoModel {

  @observable completed = false;
  @observable body;
  id;

  constructor(id, body) {
    this.id = id;
    this.body = body;
  }

  @action('toggle todo') toggle() {
    this.completed = !this.completed;
  }

  static create(body) {
    const id = v4();

    return {
      id,
      todo: new TodoModel(id, body),
    };
  }

}
