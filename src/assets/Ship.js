export {Carrier, BattleShip, Destroyer, Submarine, Patrol_Boat};

class Ship{

    constructor(length, hit){
        this.length = length;
        this.hitNumber = hit;
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

const Carrier = new Ship(5, 0);
const BattleShip = new Ship(4, 0);
const Destroyer = new Ship(3, 0);
const Submarine = new Ship(3, 0);
const Patrol_Boat = new Ship(2, 0);