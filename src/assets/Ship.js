export {Ship};

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