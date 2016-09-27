import { v4 } from 'node-uuid';

import { observable, action } from 'mobx';

export default class TodoModel {

  @observable completed;
  @observable body;

  constructor(body, id = v4(), completed = false) {
    this.id = id;
    this.completed = completed;
    this.body = body;
  }

  @action('toggle todo') toggle() {
    this.completed = !this.completed;
  }

  @action('update todo') update(body) {
    this.body = body;
  }

  toJS() {
    const { id, body, completed } = this;

    return { id, body, completed };
  }

}
