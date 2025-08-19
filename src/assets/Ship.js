export {Ship};

class Ship{

    constructor(length){
        this.length = length;
        this.hitNumber = 0
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