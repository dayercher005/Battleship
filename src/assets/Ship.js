export {Ship};

class Ship{

    constructor(length, hit){
        this.length = length;
        this.hitNumber = hit;
        this.sunk = false;
    }

    hit(){
        return this.hitNumber++;
    }

    isSunk(){
        if (this.hitNumber === this.length){
            this.sunk = true;
        }

        return this.sunk
    }
}