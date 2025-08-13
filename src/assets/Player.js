import {GameBoard} from "./GameBoard.js"

export {Player}

class Player{

    constructor(){

    }

    getGameBoard(){
        const newGameBoard = GameBoard();
        return newGameBoard();
    }

}