import {GameController} from "./App.js";

export {renderGameBoards, UIController}

function renderGameBoards() {

    const newGame = GameController();

    const ownGrid = document.querySelector("#ownGrid");
    const opponentGrid = document.querySelector("#opponentGrid");

    const createHumanGridBoard = () => {
        newGame.HumanPlayer.getGameBoard().gameGrid.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {

                const cellButton = document.createElement("div");
                cellButton.classList.add("cellButton");
                
                ownGrid.appendChild(cellButton);
                cellButton.textContent = `${rowIndex}, ${cellIndex}`;
            })
        })
    };

    const createComputerGridBoard = () => {

        newGame.ComputerPlayer.getGameBoard().gameGrid.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
            const cellButton = document.createElement("div");
            cellButton.classList.add("cellButton");
            
            opponentGrid.appendChild(cellButton);
            cellButton.textContent = `${rowIndex}, ${cellIndex}`;
            });    
        });
    };

    const renderComputerShipPlacement = () => {

        opponentGrid.innerHTML = "";

        newGame.ComputerRandomPlacementController().forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {

                const cellButton = document.createElement("div");
                cellButton.classList.add("cellButton");

                cellButton.textContent = `${rowIndex}, ${cellIndex}`;

                if (cell !== null){
                    cellButton.setAttribute("style", "background-color: green;");
                }

                opponentGrid.appendChild(cellButton);
            });
        });
           
    }

    const randomHumanShipPlacement = () => {

        ownGrid.innerHTML = "";

        newGame.HumanRandomPlacementController().forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {

                const cellButton = document.createElement("div");
                cellButton.classList.add("cellButton");

                cellButton.textContent = `${rowIndex}, ${cellIndex}`;

                if (cell !== null){
                    cellButton.setAttribute("style", "background-color: red;");
                }

                ownGrid.appendChild(cellButton);
            })
        });
    }

    return {createHumanGridBoard, createComputerGridBoard, randomHumanShipPlacement ,renderComputerShipPlacement}

}



function UIController(){
    
    const startGameButton = document.querySelector("#startButton");
    const randomizeShipsButton = document.querySelector("#randomButton");

    renderGameBoards().createHumanGridBoard();
    renderGameBoards().createComputerGridBoard();

    randomizeShipsButton.addEventListener("click", () => {
        renderGameBoards().randomHumanShipPlacement();
    });

    startGameButton.addEventListener("click", () =>{
        renderGameBoards().renderComputerShipPlacement();
    })
}