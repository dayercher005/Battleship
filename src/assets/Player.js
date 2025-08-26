import {GameBoard} from "./GameBoard.js"

export {Player}

class Player{

    constructor(name){
        this.name = name;
    }

    getGameBoard(){
        const ownGameBoard = new GameBoard();
        return ownGameBoard;
    }

}