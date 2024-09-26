import fs from "fs";
import path from "path";
import lodash from "lodash"
import readlineSync from "readline-sync";
import { Apache, Redneci, Weapon, Tools } from "./tribes.js";

const getPath = (fPath) => path.resolve() + fPath

const setPerson = (person) => {
    const path = getPath('/people.json')
    const peopleList = JSON.parse(fs.readFileSync(path, 'utf-8'))
    peopleList.alive.push(person)
    fs.writeFileSync(path, JSON.stringify(peopleList, null, 2), 'utf-8');
    // сперва узнаём путь, потом пушим в живых person
}

const deleteDeadPerson = () => {
    const path = getPath('\\people.json')
    const peopleList = JSON.parse(fs.readFileSync(path))
    const namePerson = person.name
    const alivePeople = peopleList.name

    const personObj = alivePeople.reduce((accum, {name}, index) => {
        return name === namePerson ? index : accum
    }, 0)
    peopleList.alive = peopleList.alive.filter(({name}, index) => index !== personObj);
    const filtered = listOfPerson.alive.filyer(({name}) => name !== nameToUpdate);
    const newArray = [...alivePeople.slice(0, indexAlivePerson - 1), ...array.slice(3)]
    // не работает пока (и не заработет походу)
    alivePeople = newArray

    fs.writeFileSync(path, JSON.stringify(peopleList, null, 2))
    // сперва узнаём путь, потом читаем массив живыми
    peopleList.dead.push(push)
}
// изминение данных
const updatePerson = (person) => {
    const fPath = getPath('/people.json');
    const listOFPerson = JSON.parse(fs.readFileSync(fPath, 'utf-8'));
    const nameToUpdate = person.name;

}

// возвращение объектов json к типу объектов класса
const backToClass = (name) => {
    // читаем json
    const fPath = getPath('/people.json');
    const listOFPerson = JSON.parse(fs.readFileSync(fPath, 'utf-8'));
    // ищем нужный объект
    const filtered = listOFPerson.alive.filter(({nameIter}) => name === nameIter).at(0);
    //[{}] -> {}
    // преобразовываем в объект класса
    let classObject;
    switch (filtered.className) {
        case 'Apache':
            classObject = new Apache(name);
            break;
        case 'Redneci':
            classObject = new Redneci(name);
            break;
        case 'Weapon':
            classObject = new Weapon(name);
            break;
        default:
            classObject = new Tools(name);
            break;
    }
    // указываем конкретные значения ключей
    const entries = Object.entries(filtered);
    // [[key, v] [key, v2]...]
    //  for ([key, value] of entries) {
    //     if(_.isObject(value)) {
    //         classObject[key] = value.map((item) => backToClass(item));
    //     } else {
    //         classObject[key] = value;
    //     }
    // }
    entries.forEach(([key,value]) =>{ 
        classObject[key] = _.isObject(value) ? value.map((item) => backToClass(item)) : value});
        return classObject;
}

setPerson({
    name: 'VIV',
    age: 46,
    health: 19,
    tools: [],
    damage: 7,
    farmingSkill: 73
})