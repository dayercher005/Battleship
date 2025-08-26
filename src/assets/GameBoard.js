export {GameBoard};

class GameBoard{

    constructor(){
        this.gameGrid = Array(10).fill(null).map(() => Array(10).fill(null));
        this.shipArmy = [];
        this.firedCoordinates = [];
    }


    placeShips(shipType, direction, coordinateX, coordinateY){

        if (!this.validShipPlacement(shipType, direction, coordinateX, coordinateY)){
            return false
        }
    
        
        if (direction === "horizontal"){
            for (let i = 0; i < shipType.length; i++){
                this.gameGrid[coordinateX][coordinateY + i] = shipType;
            }
            this.shipArmy.push(shipType);
        } else if (direction === "vertical"){
            for (let i = 0; i < shipType.length; i++){
                this.gameGrid[coordinateX + i][coordinateY] = shipType;
            }
            this.shipArmy.push(shipType);
        }

        return this.gameGrid;
        
    }

    validShipPlacement(shipType, direction, coordinateX, coordinateY){

        if (direction === "horizontal"){
            for(let i = 0; i < shipType.length; i++){
                if (coordinateY + i > 9 || coordinateY + i < 0){
                    return false;
                } else if (this.gameGrid[coordinateX][coordinateY + i] !== null){
                    return false;
                }
            } 
        } else if (direction === "vertical"){
            for (let i = 0; i < shipType.length; i++){
                if (coordinateX + i > 9 || coordinateX + i < 0 ){
                    return false;
                } else if (this.gameGrid[coordinateX + i][coordinateY] !== null){
                    return false;
                }
            }
        }

        return true
    }

    receiveAttack(coordinateX, coordinateY){

        while(!this.coordinatesValidator(coordinateX, coordinateY)){
            this.coordinatesValidator(coordinateX, coordinateY);
        }

        if (this.gameGrid[coordinateX][coordinateY]){
            for(let index = 0; index < this.shipArmy.length; index++ ){
                if (this.gameGrid[coordinateX][coordinateY] === this.shipArmy[index]){
                    this.gameGrid[coordinateX][coordinateY] = "hitShip";
                    this.shipArmy[index].hit();
                    this.shipArmy[index].isSunk();
                }
            }
        } else {
            this.gameGrid[coordinateX][coordinateY] = "None"
        }

        this.firedCoordinates.push([coordinateX, coordinateY])

        return this.gameGrid;
    }

    coordinatesValidator(coordinateX, coordinateY){
        for (let index = 0; index < this.firedCoordinates.length; index++){
            if ([coordinateX, coordinateY] == this.firedCoordinates[index]){
                return false     
            }
        }
        
        return true
    }

    gameEnd(){  
        for (let index = 0; index < this.shipArmy.length; index++){
            if (!this.shipArmy[index].sunk){
                return false;
            }
        }
        return true
    }

    resetBoard(){
        this.gameGrid = Array(10).fill(null).map(() => Array(10).fill(null));
    }
}
