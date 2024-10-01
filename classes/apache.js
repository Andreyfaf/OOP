import { TribleMember } from '../tribes';

export class Apache extends TribleMember {
  constructor(name) {
    // обращаемся к конструктору TribeMember
    super(name);
    this.farmingSkill = 60 + Math.round(Math.random() * 40);
    if (this.health >= 40) {
      this.health = Math.round(Math.random() * 40);
    }
    this.tools = [];
  }
}
