import {Ship} from "./Ship.js"
import {Player} from "./Player.js"

export {GameController}

function GameController(){

    const HumanPlayer = new Player("Human");
    const ComputerPlayer = new Player("Computer");

    const ComputerGameBoard = ComputerPlayer.getGameBoard();
    const HumanGameBoard = HumanPlayer.getGameBoard();

    let HumanShipTracker = [];


    const ComputerBoardCreation = () => {
        return ComputerGameBoard.gameGrid;
    }

    const HumanBoardCreation = () => {
        return HumanGameBoard.gameGrid;
    }

    const HumanRandomPlacementController = () => {
        HumanGameBoard.resetBoard();

        for(let index = 0; index < HumanGameBoard.shipArmy.length; index++){
            const directions = ["horizontal", "vertical"];
            const randomDirectionIndex = Math.floor(Math.random() * directions.length);
            const randomDirection = directions[randomDirectionIndex];
            const HumanCoordinateX = Math.floor(Math.random() * 10);
            const HumanCoordinateY = Math.floor(Math.random() * 10);
            HumanRecursiveShipPlacement(HumanGameBoard.shipArmy[index], randomDirection, HumanCoordinateX, HumanCoordinateY);
        }

        return HumanGameBoard.gameGrid;
    }

    const HumanRecursiveShipPlacement = (Ship, direction, coordinateX, coordinateY) => {

        if(!HumanGameBoard.placeShips(Ship, direction, coordinateX, coordinateY)){
            const newCoordinateX = Math.floor(Math.random() * 10);
            const newCoordinateY = Math.floor(Math.random() * 10);

            HumanRecursiveShipPlacement(Ship, direction, newCoordinateX, newCoordinateY);
        } else{
            HumanGameBoard.placeShips(Ship, direction, coordinateX, coordinateY);
        }
        
    };

    const ComputerRandomPlacementController = () => {
        ComputerGameBoard.resetBoard();

        for (let index = 0; index < ComputerGameBoard.shipArmy.length; index++){
            const directions = ["horizontal", "vertical"];
            const randomDirectionIndex = Math.floor(Math.random() * directions.length);
            const randomDirection = directions[randomDirectionIndex];
            const ComputerCoordinateX = Math.floor(Math.random() * 10);
            const ComputerCoordinateY = Math.floor(Math.random() * 10);
            ComputerRecursiveShipPlacement(ComputerGameBoard.shipArmy[index], randomDirection, ComputerCoordinateX, ComputerCoordinateY);
        }
            
        return ComputerGameBoard.gameGrid;
            
    };
        
    
    const ComputerRecursiveShipPlacement = (Ship, direction, coordinateX, coordinateY) => {

        if(!ComputerGameBoard.placeShips(Ship, direction, coordinateX, coordinateY)){
            const newCoordinateX = Math.floor(Math.random() * 10);
            const newCoordinateY = Math.floor(Math.random() * 10);

            ComputerRecursiveShipPlacement(Ship, direction, newCoordinateX, newCoordinateY);
        } else{
            ComputerGameBoard.placeShips(Ship, direction, coordinateX, coordinateY);
        }
        
    };




    const HumanShipPlacementController = (ShipType, direction, coordinateX, coordinateY) => {

        if(!HumanGameBoard.placeShips(ShipType, direction, coordinateX, coordinateY)){
            return false
        }
        
        return HumanGameBoard.gameGrid;
    };

    const HumanShipValidatorController = (Ship) => {

        if (HumanShipTracker.length === 0){
            HumanShipTracker.push(Ship);
            return true;
        }

        for (let index = 0; index < HumanShipTracker.length; index ++){
            if (HumanShipTracker[index] === Ship){
                return false;
            }
        }

        HumanShipTracker.push(Ship);

        return true;
    }


    const ComputerAttackController = () => {

        const randomCoordinateX = Math.floor(Math.random() * 10);
        const randomCoordinateY = Math.floor(Math.random() * 10);
        ComputerAttackValidator(randomCoordinateX, randomCoordinateY);
        
    }

    const ComputerAttackValidator = (coordinateX, coordinateY) => {

        if (!HumanGameBoard.receiveAttack(coordinateX, coordinateY)){
            const randomCoordinateX = Math.floor(Math.random() * 10);
            const randomCoordinateY = Math.floor(Math.random() * 10);
            ComputerAttackValidator(randomCoordinateX, randomCoordinateY);

        } else {
            HumanGameBoard.receiveAttack(coordinateX, coordinateY)
        }
    }

    const HumanAttackController = (coordinateX, coordinateY) => {

        ComputerGameBoard.receiveAttack(coordinateX, coordinateY);
        return ComputerGameBoard.gameGrid;
    }


    const GameRestartController = () => {

        const HumanGameEnd = HumanGameBoard.gameEnd();
        const ComputerGameEnd = ComputerGameBoard.gameEnd();
        console.log(HumanGameEnd, ComputerGameEnd);
        if (HumanGameEnd === true){
            return false;

        } else if (ComputerGameEnd === true){ 
            return true;
        }

        return "No restart";
    }

    const VariablesResetController = () => {
        HumanGameBoard.resetBoard();
        HumanGameBoard.resetShipsStatus();
        ComputerGameBoard.resetBoard();
        ComputerGameBoard.resetShipsStatus();
        HumanShipTracker = [];
    }

    return {
        HumanGameBoard,
        ComputerGameBoard,
        ComputerBoardCreation, 
        HumanBoardCreation, 
        HumanRandomPlacementController, 
        ComputerRandomPlacementController, 
        HumanShipPlacementController,
        HumanShipValidatorController,
        ComputerAttackController, 
        HumanAttackController,
        GameRestartController,
        VariablesResetController
    };
};
