import { Dog } from './dog.js';

export class FrenchBull extends Dog {
  constructor(name, owner, age, food, breed) {
    super(name, owner, age, food);
    this.breed = breed;
  }
  voice() {
    return 'Gav-gav';
  }
  info() {
    return `Dog name: ${this.name}, age ${this.age} month's, owner: ${
      this.owner
    }, ${this.name} likes to eat ${this.eat}, and he can make ${this.voice()}`;
  }
}
