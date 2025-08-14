export {GameBoard};

class GameBoard{

    constructor(){
        this.height = 10;
        this.width = 10;
        this.gameGrid = [];
        for(let height = 0; height < this.height; height++){
            this.gameGrid[height] = [];
            for(let width = 0; width < this.height; width++){
                this.gameGrid[height].push(0);
            }
        }
        this.shipArmy = [];
        this.missedCoordinates = [];
        this.hitCoordinates = [];
    }


    placeShips(shipType, direction, coordinateX, coordinateY){

        this.shipArmy.push(shipType);

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

        this.gameGrid[coordinateX][coordinateY] = 7;
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
