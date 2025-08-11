export {GameBoard};

class GameBoard{

    constructor(){
        this.height = 7;
        this.width = 7;
    }

    createBoard(){
        const gameGrid = []
        for(let height = 0; height < this.height; height++){
            gameGrid[height] = [];
            for(let width = 0; width < this.height; width++){
                gameGrid[height].push(0);
            }
        }

        return gameGrid;
    }

    placeShips(){

    }

    receiveAttack(coordinates){

    }

    trackAttacks(){

    }
}