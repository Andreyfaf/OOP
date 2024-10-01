import { TribeMember } from '../index.js';

export class Tools extends Item {
  constructor(name) {
    super(name);
    this.durability = Math.round(Math.random() * 3);
  }
}
