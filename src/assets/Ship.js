export {Ship, Carrier, BattleShip, Destroyer, Submarine, Patrol_Boat};

class Ship{

    constructor(length, hit, key){
        this.length = length;
        this.hitNumber = hit;
        this.key = key;
        this.sunk = false;
    }

    hit(){
        return this.hitNumber += 1;
    }

    isSunk(){
        if (this.hitNumber === this.length){
            this.sunk = true;
        }

        return this.sunk
    }

    
}

const Carrier = new Ship(5, 0, 1);
const BattleShip = new Ship(4, 0, 2);
const Destroyer = new Ship(3, 0, 3);
const Submarine = new Ship(3, 0, 4);
const Patrol_Boat = new Ship(2, 0, 5);