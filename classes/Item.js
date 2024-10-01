import { TribleMember } from '../tribes.js';

export class Item {
  constructor(name) {
    this.name = name;
    this.durability = 100;
    // Math.round(Math.random() * 5);
    this.damage = 5;
  }
}
