// абстракция
export class TribleMember {
    // создаём конструктор объекта
    constructor (name) {
        this.name = name;
        this.age = Math.round(Math.random() * 100);
        this.health = Math.round(Math.random() * 100);
    }

    getInfo () {
        console.log(`Aбориген ${this.name}, с возрастом ${this.age}, и здоровьем ${this.health}`)
    }
}

// дочерние классы 
export class Apache extends TribleMember {
    constructor (name) {
        // обращаемся к конструктору TribeMember
        super(name);
        this.farmingSkill = 60 + Math.round(Math.random() * 40);
        if (this.health >= 40) {
            this.health = Math.round(Math.random() * 40);
        } 
        this.tools = []

    }

    getDiscription() {
        this.getInfo();
        console.log(`Абориген имеет навык земледелия ${this.farmingSkill}`)
    }

    addTool(tool) {
        this.tools.push(tool)
    }

    getToolList() {
        const list = this.tools.map(({name, durability}) => `${name}, ${durability}`)
        console.log(`${this.name} имеет в багаже ${list.join('; ')}`);
    }
}

// создаём класс реднеков (здоровье выше 60 навык войны)
export class Redneci extends TribleMember {
    constructor (name) {
        super(name) 
        this.warSkill = Math.round(Math.random() * 100);
        if (this.health < 60) {
            this.health = 60 + Math.round(Math.random() * 40);
        }
    }

    getDiscription() {
        this.getInfo();
        console.log(`Абориген имеет навык войны ${this.warSkill}`)
    }
}

// создадим класс оружия
export class Item {
    constructor(name) {
        this.name = name;
        this.durability = Math.round(Math.random() * 5);
    }

    use() {
        if (this.durability > 0 ) {
            this.durability -= 1
            console.log(`${this.name} использован. Осталось ${this.durability} использований`)
            return true
        } else {
            console.log(`${this.name} cломан, больше не исаользуется.`)
            return false;
        }
    }
}

export class Weapon extends Item {
    constructor (name) {
        super(name);
        this.className = 'weapon';
        this.durability += 3;
        this.damage += Math.round(Math.random());
    }
}

export class Tools extends Item {
    constructor (name) {
        super(name);
        this.className = 'tool';
        this.durability = Math.round(Math.random() * 3);
    }
}

// const Vitaly = new Redneci('VIV')
// Vitaly.getDiscription()


