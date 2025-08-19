import {GameController} from "./App.js";

export {renderGameBoards, UIController}

function renderGameBoards() {

    const newGame = GameController();

    const ownGrid = document.querySelector("#ownGrid");
    const opponentGrid = document.querySelector("#opponentGrid");

    const createHumanGridBoard = () => {
        newGame.HumanPlayer.getGameBoard().gameGrid.forEach((row) => {
            row.forEach(() => {

                const cellButton = document.createElement("div");
                cellButton.classList.add("cellButton");
                
                ownGrid.appendChild(cellButton);
            })
        })
    };

    const createComputerGridBoard = () => {

        newGame.ComputerPlayer.getGameBoard().gameGrid.forEach((row) => {
            row.forEach(() => {
                const cellButton = document.createElement("div");
                cellButton.classList.add("cellButton");

                opponentGrid.appendChild(cellButton);
            });    
        });
    };

    const renderComputerShipPlacement = () => {

        opponentGrid.innerHTML = "";

        newGame.ComputerRandomPlacementController().forEach((row) => {
            row.forEach(() => {
                const cellButton = document.createElement("div");
                cellButton.classList.add("cellButton");

                opponentGrid.appendChild(cellButton);
            });
        });
           
    }

    const randomHumanShipPlacement = () => {

        ownGrid.innerHTML = "";

        newGame.HumanRandomPlacementController().forEach((row) => {
            row.forEach((cell) => {
                const cellButton = document.createElement("div");
                cellButton.classList.add("cellButton");

                if (cell !== null){
                    cellButton.setAttribute("style", "background-color: red;");
                }

                ownGrid.appendChild(cellButton);
                
            })
        });
        

    };

    const renderComputerAttack = () => {

        ownGrid.innerHTML = "";
        
        newGame.ComputerAttackController().forEach((row) => {
            row.forEach((cell) => {

                const cellButton = document.createElement("div");
                cellButton.classList.add("cellButton");

                if (cell === "None") {
                    cellButton.setAttribute("style", "background-color: blue");
                } else if (cell === "hitShip") {
                    cellButton.setAttribute("style", "background-color: red");
                } else if (!cell){
                    cellButton.setAttribute("style", "background-color: white");
                }

                ownGrid.appendChild(cellButton);

            })
        });
        
    }

    return {createHumanGridBoard, createComputerGridBoard, randomHumanShipPlacement ,renderComputerShipPlacement, renderComputerAttack}

}



function UIEventListeners(){
    
    const startGameButton = document.querySelector("#startButton");
    const randomizeShipsButton = document.querySelector("#randomButton");

    renderGameBoards().createHumanGridBoard();
    renderGameBoards().createComputerGridBoard();

    randomizeShipsButton.addEventListener("click", () => {
        renderGameBoards().randomHumanShipPlacement();
    });

    startGameButton.addEventListener("click", () =>{
        renderGameBoards().renderComputerShipPlacement();
        renderGameBoards().renderComputerAttack();
    });

    
}



function UIController(){

    UIEventListeners();
}