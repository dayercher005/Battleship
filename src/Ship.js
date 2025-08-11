class Ship{

    constructor(length, hit, sunk){
        this.length = length;
        this.hitNumber = hit;
        this.sunk = sunk;
    }

    hit(){
        this.hit++;
    }

    isSunk(){
        if (this.hitNumber === this.length){
            this.sunk = true;
        }
    }
}