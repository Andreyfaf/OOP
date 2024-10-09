import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import readlineSync from 'readline-sync';
import { Apache } from './tribes.js';
import { Redneci } from './tribes.js';
import { Tools } from './tribes.js';
import { Weapon } from './tribes.js';
import {
  Apache, Redneci, Weapon, Tools,
} from './tribes.js';
import { escape } from 'querystring';

// ф-ция, создающая новый объект класса и сохраняющая его в p.json
const createObject = () => {
  const classes = ['Apache', 'Redneci', 'Tools', 'Weapon'];
  const classToCreate = readlineSync.keyInSelect(classes, 'what create?');

  if(classToCreate === -1) {
    console.log('ну не надо, так не надо');
    return false;
  }

  const name = classToCreate < 2 ? readlineSync.question('Имя: ') 
  : readlineSync.question('Название: ');

  // const obj = classToCreate === 0 ? new Apache(name) 
  // : classToCreate === 1 ? new Redneci(name) 
  //   : classToCreate === 2 ? new Tools(name) : new Weapon(name);

  console.log(obj);
  setPerson(obj);
};

// ф-ция, добавляющая конкретный item к конкретному person
const addItem = () => {
  const listOfObject = getObject();

  const listOfNames = listOfObject.alive.map(({name}) => name);
  const indexOfNames = readlineSync.keyInSelect(listOfNames, 'кому добавить?');

  const listOfitems = listOfObject.item.map(({name}) => name);
  const indexOfItem = readlineSync.keyInSelect(listOfitems, 'что добавить?');

  const person = backToClass(listOfObject.alive.at(indexOfNames).name);
  const item = backToClass(listOfObject.item.at(indexOfItem).name);
  if (person.className == 'Apache' && item.className === 'Weapon') {
    console.log('невозможно добавить оружие к классу Апаче');
    return false;
  }
  person.addTool(item);
  // updateObject(person);
  return true;
}


const getPath = () => path.resolve() + fPath;

const getObject = () => JSON.parse(fs.readFileSync(getPath(), 'utf-8'));

const updateJSON = (dataToUpdate) => fs.writeFileSync(getPath(), JSON.stringify(dataToUpdate, null, 2), 'utf-8');

const classesConstructor = (key, name) => {
  const classes = {
    0: new Apache(name),
    1: new Redneci(name),
    2: new Tools(name),
    3: new Weapon(name),
  };
  return classes[key];
};

const setObject = (object) => {
  const listOfObject = getObject();
  if (['Apache', 'Redneci'].includes(object.className)) {
    listOfObject.alive.push(object);
  } else {
    listOfObject.item.push(object);
  }
  updateJSON(listOfObject);
  // const path = getPath('/data/people.json');
  // const peopleList = JSON.parse(fs.readFileSync(path, 'utf-8'));
  // listOfObject.alive.push(object);
  // fs.writeFileSync(path, JSON.stringify(peopleList, null, 2), 'utf-8');
  // сперва узнаём путь, потом пушим в живых person
};


const deleteObject = (object) => {
  const listOfObjects = getObject();
  const nameOfdead = object.name;
  const filtered = listOfObjects.alive.filter(({name}) => name !== nameOfdead);
  listOfObjects.alive = filtered;
  updateJSON(listOfObjects);
}

const deleteDeadPerson = () => {
  const path = getPath('\\people.json');
  const peopleList = JSON.parse(fs.readFileSync(path));
  const namePerson = person.name;
  const alivePeople = peopleList.name;

  const personObj = alivePeople.reduce((accum, { name }, index) => (name === namePerson ? index : accum), 0);
  peopleList.alive = peopleList.alive.filter(({ name }, index) => index !== personObj);
  const filtered = listOfPerson.alive.filyer(({ name }) => name !== nameToUpdate);
  const newArray = [...alivePeople.slice(0, indexAlivePerson - 1), ...array.slice(3)];
  // не работает пока (и не заработет походу)
  alivePeople = newArray;

  fs.writeFileSync(path, JSON.stringify(peopleList, null, 2));
  // сперва узнаём путь, потом читаем массив живыми
  peopleList.dead.push(push);
};
// изминение данных
const updatePerson = (person) => {
  const fPath = getPath('/people.json');
  const listOFPerson = JSON.parse(fs.readFileSync(fPath, 'utf-8'));
  const nameToUpdate = person.name;
};

const updateObject = (object) => {
  const listOfObjects = getObject();
  const nameToUpdate = object.name;
  const filtered = listOfObjects.alive.filter(({name}) => name !== nameToUpdate);
}
// возвращение объектов json к типу объектов класса
const backToClass = (nameToFined) => {
  // читаем json
  const fPath = getPath('/people.json');
  const listOFPerson = JSON.parse(fs.readFileSync(fPath, 'utf-8'));
  // ищем нужный объект
  let filtered = listOFPerson.alive.filter(({ nameIter }) => name === nameToFined).at(0);
  // console.log(`first search ${filtered}`);
  if (filtered.length === 0) {
    filtered = listOFPerson.alive.filter(({ nameIter }) => name === nameToFined).at(0);
  };
  const jsonObject = filtered.at(0);
  const classes = ['apache', 'redneck', 'tool', 'weapon'];
  const key = ['apache', 'redneck', 'tool', 'weapon'].indexOf(jsonObject.className);
  // [{}] -> {}
  // преобразовываем в объект класса
  const classObject = classesConstructor(key, nameToFined);
  // switch (filtered.at(0).className) {
  // const entries = object.entries(jsonObject)
  //   case 'Apache':
  //     classObject = new Apache(nameToFined);
  //     break;
  //   case 'Redneci':
  //     classObject = new Redneci(nameToFined);
  //     break;
  //   case 'Weapon':
  //     classObject = new Weapon(nameToFined);
  //     break;
  //   default:
  //     classObject = new Tools(nameToFined);
  //     break;
  // }
  // указываем конкретные значения ключей
  const entries = Object.entries(jsonObject);
  // [[key, v] [key, v2]...]
  //  for ([key, value] of entries) {
  //     if(_.isObject(value)) {
  //         classObject[key] = value.map((item) => backToClass(item));
  //     } else {
  //         classObject[key] = value;
  //     }
  // }
  entries.forEach(([key, value]) => {
    classObject[key] = _.isObject(value) ? value.map((item) => backToClass(item)) : value;
  });
  return classObject;
};

setPerson({
  name: 'VIV',
  age: 46,
  health: 19,
  tools: [],
  damage: 7,
  farmingSkill: 73,
});

export {updateObject, classesConstructor, deleteObject, createObject, deleteDeadPerson, updatePerson, setObject, addItem};