export {GameBoard};

class GameBoard{

    constructor(){
        this.height = 10;
        this.width = 10;
        this.gameGrid = Array(10).fill(null).map(() => Array(10).fill(null));
        this.shipArmy = [];
        this.computerShipCoordinates = [];
        this.humanShipCoordinates = [];
        this.missedCoordinates = [];
        this.hitCoordinates = [];
       
    }


    placeShips(shipType, direction, coordinateX, coordinateY){

        if (!this.validShipPlacement(shipType, direction, coordinateX, coordinateY)){
            return false
        }
    
        
        if (direction === "horizontal"){
            for (let i = 0; i < shipType.length; i++){
                this.gameGrid[coordinateX][coordinateY + i] = shipType.key;
            }
        } else if (direction === "vertical"){
            for (let i = 0; i < shipType.length; i++){
                this.gameGrid[coordinateX + i][coordinateY] = shipType.key;
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
        if (this.gameGrid[coordinateX][coordinateY] !== 0){
            this.hitCoordinates.push([coordinateX, coordinateY])
            this.shipArmy.forEach((ship) => {
                if (this.gameGrid[coordinateX][coordinateY] === ship.key){
                    ship.hit();
                }
            })
        } else {
            this.missedCoordinates.push([coordinateX, coordinateY]);
        }

        this.gameGrid[coordinateX][coordinateY] = 0;
    }


    trackGameFlow(){
        this.gameGrid.forEach((row) => {
            row.forEach((column) => {
                if (column !== 0 || column !== 7){
                    return false;
                }
            })
        })

        return true;
    }
}
