import {Ship} from "./Ship.js"

export {GameBoard};

class GameBoard{

    constructor(){
        this.height = 7;
        this.width = 7;
        this.gameGrid = [];
        for(let height = 0; height < this.height; height++){
            this.gameGrid[height] = [];
            for(let width = 0; width < this.height; width++){
                this.gameGrid[height].push(0);
            }
        }
    }


    placeShips(shipType, direction, coordinateX, coordinateY){

        if (direction === "horizontal"){
            for (let i = 0; i < shipType.length; i++){
                this.gameGrid[coordinateX][coordinateY + i] = 1;
            }
            
        } else if (direction === "vertical"){
            for (let i = 0; i < shipType.length; i++){
                this.gameGrid[coordinateX + i][coordinateY] = 1;
            }
    
        }
        return this.gameGrid;
    }

    receiveAttack([coordinateX, coordinateY]){
        if (this.gameGrid[coordinateX][coordinateY] === 1){

        } else if (this.gameGrid[coordinateX][coordinateY] === 0){
            
        }

        this.gameGrid[coordinateX][coordinateY] = 2;
    }

    trackAttacks(){

    }
}
