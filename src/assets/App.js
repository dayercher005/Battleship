import {Ship} from "./Ship.js"
import {Player} from "./Player.js"

export {GameController}

function GameController(){

    const HumanPlayer = new Player("Human");
    const ComputerPlayer = new Player("Computer");

    const Carrier = new Ship(5, 0, 1);
    const BattleShip = new Ship(4, 0, 2);
    const Destroyer = new Ship(3, 0, 3);
    const Submarine = new Ship(3, 0, 4);
    const PatrolBoat = new Ship(2, 0, 5);

    const HumanRandomPlacementController = () => {

        const ShipArmy = [Carrier, BattleShip, Destroyer, Submarine, PatrolBoat];

        const HumanGameBoard = HumanPlayer.getGameBoard();
        for (let index = 0; index < ShipArmy.length; index++){
            const directions = ["horizontal", "vertical"];
            const randomDirectionIndex = Math.floor(Math.random() * directions.length);
            const randomDirection = directions[randomDirectionIndex];
            const HumanCoordinateX = Math.floor(Math.random() * (10));
            const HumanCoordinateY = Math.floor(Math.random() * (10));

            if (HumanGameBoard.placeShips(ShipArmy[index], randomDirection, HumanCoordinateX, HumanCoordinateY) === false){
                ShipArmy.push(ShipArmy[index]);
            } else {
                HumanGameBoard.placeShips(ShipArmy[index], randomDirection, HumanCoordinateX, HumanCoordinateY);
            }
            
            }
            
            return HumanGameBoard.gameGrid;
    }

    const ComputerRandomPlacementController = () => {

        const ShipArmy = [Carrier, BattleShip, Destroyer, Submarine, PatrolBoat];

        const ComputerGameBoard =  ComputerPlayer.getGameBoard();
        for (let index = 0; index < ShipArmy.length; index++){
            const directions = ["horizontal", "vertical"];
            const randomDirectionIndex = Math.floor(Math.random() * directions.length);
            const randomDirection = directions[randomDirectionIndex];
            const ComputerCoordinateX = Math.floor(Math.random() * (10));
            const ComputerCoordinateY = Math.floor(Math.random() * (10));

            if (ComputerGameBoard.placeShips(ShipArmy[index], randomDirection, ComputerCoordinateX, ComputerCoordinateY) === false){
                ShipArmy.push(ShipArmy[index]);
            } else {
                ComputerGameBoard.placeShips(ShipArmy[index], randomDirection, ComputerCoordinateX, ComputerCoordinateY);
            }
            
            }
            
            return ComputerGameBoard.gameGrid;
            
        };
        
    


    const HumanShipPlacementController = (ShipType, direction, coordinateX, coordinateY) => {
        HumanPlayer.getGameBoard().placeShips(ShipType, direction, coordinateX, coordinateY);
    }

    return {HumanPlayer, ComputerPlayer, HumanRandomPlacementController, ComputerRandomPlacementController, HumanShipPlacementController}
}

