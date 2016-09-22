import { v4 } from 'node-uuid';

import { observable } from 'mobx';

export default class TodoModel {

  @observable completed = false;
  @observable body;
  id;

  constructor(id, body) {
    this.id = id;
    this.body = body;
  }

  static create(body) {
    const id = v4();

    return {
      id,
      todo: new TodoModel(id, body),
    };
  }

}
