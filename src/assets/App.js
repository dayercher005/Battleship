import {Ship} from "./Ship.js"
import {Player} from "./Player.js"

export {GameController}

function GameController(){

    const HumanPlayer = new Player("Human");
    const ComputerPlayer = new Player("Computer");

    const ComputerGameBoard = ComputerPlayer.getGameBoard();
    const HumanGameBoard = HumanPlayer.getGameBoard();

    const Carrier = new Ship(5);
    const BattleShip = new Ship(4);
    const Destroyer = new Ship(3);
    const Submarine = new Ship(3);
    const PatrolBoat = new Ship(2);

    const ComputerBoardCreation = () => {
        return ComputerGameBoard.gameGrid;
    }

    const HumanBoardCreation = () => {
        return HumanGameBoard.gameGrid;
    }

    const HumanRandomPlacementController = () => {
        HumanGameBoard.resetBoard();

        const ShipArmy = [Carrier, BattleShip, Destroyer, Submarine, PatrolBoat];

        for (let index = 0; index < ShipArmy.length; index++){
            const directions = ["horizontal", "vertical"];
            const randomDirectionIndex = Math.floor(Math.random() * directions.length);
            const randomDirection = directions[randomDirectionIndex];
            const HumanCoordinateX = Math.floor(Math.random() * 10);
            const HumanCoordinateY = Math.floor(Math.random() * 10);

            if (!HumanGameBoard.placeShips(ShipArmy[index], randomDirection, HumanCoordinateX, HumanCoordinateY)){
                ShipArmy.push(ShipArmy[index]);
            } else {
                HumanGameBoard.placeShips(ShipArmy[index], randomDirection, HumanCoordinateX, HumanCoordinateY);
            }
            
        }
            
        return HumanGameBoard.gameGrid;
    }

    const ComputerRandomPlacementController = () => {

        const ShipArmy = [Carrier, BattleShip, Destroyer, Submarine, PatrolBoat];

        for (let index = 0; index < ShipArmy.length; index++){
            const directions = ["horizontal", "vertical"];
            const randomDirectionIndex = Math.floor(Math.random() * directions.length);
            const randomDirection = directions[randomDirectionIndex];
            const ComputerCoordinateX = Math.floor(Math.random() * 10);
            const ComputerCoordinateY = Math.floor(Math.random() * 10);

            if (!ComputerGameBoard.placeShips(ShipArmy[index], randomDirection, ComputerCoordinateX, ComputerCoordinateY)){
                ShipArmy.push(ShipArmy[index]);
            } else {
                ComputerGameBoard.placeShips(ShipArmy[index], randomDirection, ComputerCoordinateX, ComputerCoordinateY);
            }
            
        }
            
        return ComputerGameBoard.gameGrid;
            
    };
        
    


    const HumanShipPlacementController = (ShipType, direction, coordinateX, coordinateY) => {

        const directionButton = document.querySelector("#directionContainer");

        HumanPlayer.getGameBoard().placeShips(ShipType, direction, coordinateX, coordinateY);
    };

    const ReceiveAttackController = (coordinateX, coordinateY) => {

        
    };

    const ComputerAttackController = () => {

        const randomCoordinateX = Math.floor(Math.random() * 10);
        const randomCoordinateY = Math.floor(Math.random() * 10);

        if (!HumanGameBoard.receiveAttack(randomCoordinateX, randomCoordinateY)){
            return ComputerAttackController();
        } else{
            return HumanGameBoard.receiveAttack(randomCoordinateX, randomCoordinateY);
        }
    }

    const HumanAttackController = (coordinateX, coordinateY) => {
        if (!ComputerGameBoard.receiveAttack(coordinateX, coordinateY)){
            return HumanAttackController();
        } else{
            return ComputerGameBoard.receiveAttack(coordinateX, coordinateY);
        };
        
    }

    return {
        HumanGameBoard, 
        ComputerGameBoard, 
        ComputerBoardCreation, 
        HumanBoardCreation, 
        HumanRandomPlacementController, 
        ComputerRandomPlacementController, 
        HumanShipPlacementController, ComputerAttackController, 
        HumanAttackController}
}

