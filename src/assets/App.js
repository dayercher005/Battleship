import {Ship} from "./Ship.js"
import {GameBoard} from "./GameBoard.js"
import {Player} from "./Player.js"

export {AppController}

function AppController() {
    const humanPlayer = new Player("HumanPlayer");
    const computerPlayer = new Player("ComputerPlayer");

    humanPlayer.getGameBoard();
    computerPlayer.getGameBoard();

    return {humanPlayer, computerPlayer}
}