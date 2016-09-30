import { v4 } from 'node-uuid';

import { observable, action } from 'mobx';

export default class TodoModel {

  @observable completed;
  @observable body;

  constructor(body, id = v4(), completed = false) {
    this.body = body;
    this.id = id;
    this.completed = completed;
  }

  @action('toggle todo') toggle(completed = !this.completed) {
    this.completed = completed;
  }

  @action('update todo') update(body) {
    this.body = body;
  }

  toJS() {
    const { id, body, completed } = this;

    return { id, body, completed };
  }

}
