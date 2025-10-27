export class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  canMove(randomValue){
    return randomValue >= 4;
  }

  move() {
    this.position += 1;
  }
}