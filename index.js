import { Cat } from './classes/cat.js';
import { Dog } from './classes/dog.js';
import { FrenchBull } from './classes/french.js';
let cat1 = new Cat('Barsik', 'Dvornyaga');
let cat2 = new Cat('Tisha', 'Pantera');
let dog1 = new Dog('Bobik', 'Misha', '7', 'Korm');
let dog2 = new Dog('Rex', 'Ronald', '10', 'Kostochku');

let french1 = new FrenchBull('Ronni', 'Sergei', '11', 'all', 'French bulldog');
console.log(french1.voice());
console.log(french1.breed);
console.log(french1.info());

const body = document.querySelector('body');
const frenchDiv = document.createElement('div');
frenchDiv.textContent = french1.info();
body.append(frenchDiv);
