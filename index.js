// абстракция

  getInfo() {
    console.log(`Aбориген ${this.name}, с возрастом ${this.age}, и здоровьем ${this.health}`);
  }

  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} получил ${damage} Здоровье ${this.health}`);

    if (this.health <= 0) {
      console.log(`${this.name} умер`);
      return true;
    }
    return false;
  }

  attack(target) {
    console.log(`\n${this.name} атакует ${target.name}`);
    if (this.tool.length === 0) {
      console.log(`${this.name} пытаеться атаковать, руками`);
    } else {
      console.log(`${this.name}, использует инструмент ${this.tool.at(0).name}`);
    }
    const tool = this.tool.at(0) || 0; // выбор предмета
    const toolDamage = tool.damage; // вытащил урон оружия

    if (tool.use()) {
      const isKilled = target.takeDamage(this.damage + tool.damage);
      if (isKilled) {
        target = null;
      }
    }
  }

  // loot() {

  // }
  addTool(tool) {
    this.tool.push(tool);
  }

// дочерние классы
  getDiscription() {
    this.getInfo();
    console.log(`Абориген имеет навык земледелия ${this.farmingSkill}`);
  }

  getToolList() {
    const list = this.tools.map(({ name, durability }) => `${name}, ${durability}`);
    console.log(`${this.name} имеет в багаже ${list.join('; ')}`);
  }


// создаём класс реднеков (здоровье выше 60 навык войны)
  getDiscription() {
    this.getInfo();
    console.log(`Абориген имеет навык войны ${this.warSkill}`);
 }

// создадим класс оружия
  use() {
    if (this.durability > 0) {
      this.durability -= 1;
      console.log(`${this.name} использован. Осталось ${this.durability} использований`);
      return true;
    }
    console.log(`${this.name} cломан, больше не исаользуется.`);
    return false;
  }

const Vitaly = new Redneci('VIV');
Vitaly.getDiscription();
const Daniil = new Weapon('axe');
// Daniil.getDiscription();
const motiga = new Tools('motiga');
const shovel = new Tools('shovel');
Vitaly.addTool(motiga);
Vitaly.addTool(shovel);
// Vitaly.getToolList();
console.log(Vitaly);

const axe = new Weapon('axe');
Daniil.addTool(axe);
Daniil.getToolList();

Vitaly.attack(Daniil);

//  общий класс аборигены - имя, здоровье, возраст, предметы; методы: получаем урон, атакуем, лутаем, инфо
//  апаче - навык земледелия
//  реднеки - навык войны
//  общий класс предметы - название, прочность, урон
//  инструменты - --//--
//  оружие - доп урон
