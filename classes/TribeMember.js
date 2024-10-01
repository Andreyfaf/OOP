import {TribleMember} from "../index.js"

export class TribleMember {
    // создаём конструктор объекта
    constructor(name) {
      this.name = name;
      this.age = Math.round(Math.random() * 100);
      this.health = Math.round(Math.random() * 100);
      this.tool = [];
      this.damage = 7;
    }
}

