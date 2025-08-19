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
                this.shipArmy.push(shipType);
            }
        } else if (direction === "vertical"){
            for (let i = 0; i < shipType.length; i++){
                this.gameGrid[coordinateX + i][coordinateY] = shipType;
                this.shipArmy.push(shipType);
            }
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

        if (!this.coordinatesValidator(coordinateX, coordinateY)){
            return false;
        }

        if (this.gameGrid[coordinateX][coordinateY] !== null){
            
            this.shipArmy.forEach((ship) => {
                if (this.gameGrid[coordinateX][coordinateY] === ship){
                    this.gameGrid[coordinateX][coordinateY] = "hitShip";
                    ship.hit();
                }
            })
        } else {
            this.gameGrid[coordinateX][coordinateY] = "None"
        }

        this.firedCoordinates.push([coordinateX, coordinateY])

        return this.gameGrid;
    }

    coordinatesValidator(coordinateX, coordinateY){
        this.firedCoordinates.forEach((coordinatePair) => {
            if ([coordinateX, coordinateY] == coordinatePair){
                return false
            }
        })
        
        return true
    }

    trackGameFlow(){
        this.shipArmy.forEach((ship) => {
            if (ship.sunk === false){
                return false
            }
        });

        return true;
    }
}
