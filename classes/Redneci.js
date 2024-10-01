import { TribleMember } from '../tribes.js';

export class Redneci extends TribleMember {
  constructor(name) {
    super(name);
    this.warSkill = Math.round(Math.random() * 40);
    if (this.health <= 40) {
      this.health = 60 + Math.round(Math.random() * 40);
    }
    this.tools = [];
  }
}
