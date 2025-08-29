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

        const ShipArmy = ComputerGameBoard.shipArmy;

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

        return HumanGameBoard.gameGrid;
    };


    const ComputerAttackController = () => {

        const randomCoordinateX = Math.floor(Math.random() * 10);
        const randomCoordinateY = Math.floor(Math.random() * 10);

        while(!HumanGameBoard.receiveAttack(randomCoordinateX, randomCoordinateY)){
            ComputerAttackController();
        }
        console.log(HumanGameBoard.gameGrid);
        return HumanGameBoard.gameGrid;
    }

    const HumanAttackController = (coordinateX, coordinateY) => {

        ComputerGameBoard.receiveAttack(coordinateX, coordinateY);
        
        console.log(ComputerGameBoard.gameGrid, HumanGameBoard.gameGrid);
        console.log(ComputerGameBoard.shipArmy, HumanGameBoard.shipArmy);
        return ComputerGameBoard.gameGrid;
    }


    const CellStatusController = () => {

    }


    const GameRestartController = () => {

        const HumanGameEnd = HumanGameBoard.gameEnd();
        const ComputerGameEnd = ComputerGameBoard.gameEnd();
        
        if (HumanGameEnd){
            HumanGameBoard.resetBoard();
            HumanGameBoard.resetShipsStatus();
            ComputerGameBoard.resetBoard();
            ComputerGameBoard.resetShipsStatus();
            return true;

        } else if (ComputerGameEnd){
            HumanGameBoard.resetBoard();
            HumanGameBoard.resetShipsStatus();
            ComputerGameBoard.resetBoard();
            ComputerGameBoard.resetShipsStatus();
            return false;
        }

        return "No restart";
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
        GameRestartController
    };
};
