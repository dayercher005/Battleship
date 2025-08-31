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

    // Initial Function to generate Computer's initial Ship Placement coordinates, directions and Ship Type.
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
        
    // Recursive Function to place Computer's Ships
    const ComputerRecursiveShipPlacement = (Ship, direction, coordinateX, coordinateY) => {

        if(!ComputerGameBoard.placeShips(Ship, direction, coordinateX, coordinateY)){
            const newCoordinateX = Math.floor(Math.random() * 10);
            const newCoordinateY = Math.floor(Math.random() * 10);

            ComputerRecursiveShipPlacement(Ship, direction, newCoordinateX, newCoordinateY);
        } else{
            ComputerGameBoard.placeShips(Ship, direction, coordinateX, coordinateY);
        }
        
    };


    // Function to Validate Ship Placement of Human 
    const HumanShipPlacementController = (ShipType, direction, coordinateX, coordinateY) => {

        if(!HumanGameBoard.placeShips(ShipType, direction, coordinateX, coordinateY)){
            return false;
        }
        
        return HumanGameBoard.gameGrid;
    };


    // Function to Generate the initial random coordinates of Computer's attacks
    const ComputerAttackController = () => {

        const randomCoordinateX = Math.floor(Math.random() * 10);
        const randomCoordinateY = Math.floor(Math.random() * 10);
        ComputerAttackValidator(randomCoordinateX, randomCoordinateY);
        
    }

    // Recursive Function to Validate Computer's Attacks.
    const ComputerAttackValidator = (coordinateX, coordinateY) => {

        if (!HumanGameBoard.receiveAttack(coordinateX, coordinateY)){
            const randomCoordinateX = Math.floor(Math.random() * 10);
            const randomCoordinateY = Math.floor(Math.random() * 10);
            ComputerAttackValidator(randomCoordinateX, randomCoordinateY);

        } else {
            HumanGameBoard.receiveAttack(coordinateX, coordinateY);
        }
    }

    // Function to implement Human's attacks on Computer's Board.
    const HumanAttackController = (coordinateX, coordinateY) => {

        if (!ComputerGameBoard.receiveAttack(coordinateX, coordinateY)){
            return false;
        }
        
        return ComputerGameBoard.gameGrid;
    }


    // Restart Function to track winner.
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

    // Resetting Function to reset all the variables of both the Human Player and Computer Player.
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
        ComputerAttackController, 
        HumanAttackController,
        GameRestartController,
        VariablesResetController
    };
};
