import {Ship} from "./Ship.js"
import {Player} from "./Player.js"

export {GameController}

function GameController(){

    const HumanPlayer = new Player("Human");
    const ComputerPlayer = new Player("Computer");

    const ComputerGameBoard = ComputerPlayer.getGameBoard();
    const HumanGameBoard = HumanPlayer.getGameBoard();


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

        HumanGameBoard.placeShips(ShipType, direction, coordinateX, coordinateY);
        console.log(HumanGameBoard.gameGrid);
        return HumanGameBoard.gameGrid;
    };


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
    }

    return {
        HumanGameBoard,
        ComputerGameBoard,
        ComputerBoardCreation, 
        HumanBoardCreation, 
        HumanRandomPlacementController, 
        ComputerRandomPlacementController, 
        HumanShipPlacementController, 
        ComputerAttackController, 
        HumanAttackController,
        GameRestartController,
        VariablesResetController
    };
};
