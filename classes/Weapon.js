import { TribeMember } from '../tribes.js';

export class Weapon extends Item {
  constructor(name) {
    super(name);
    this.durability += 3;
  }
}
