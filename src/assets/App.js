import {Ship} from "./Ship.js"
import {GameBoard} from "./GameBoard.js"
import Players from "./Players.js"

function AppController() {
    const Carrier = new Ship(5, 0, 1);
    const BattleShip = new Ship(4, 0, 2);
    const Destroyer = new Ship(3, 0, 3);
    const Submarine = new Ship(3, 0, 4);
    const Patrol_Boat = new Ship(2, 0, 5);
}