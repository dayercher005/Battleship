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

        newGame.ComputerPlacementController().forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {

                const cellButton = document.createElement("div");
                cellButton.classList.add("cellButton");

                cellButton.textContent = `${rowIndex}, ${cellIndex}`;

                if (cell != 0){
                    cellButton.setAttribute("style", "background-color: green;");
                }

                opponentGrid.appendChild(cellButton);
            })
        });
           
    }

    return {createHumanGridBoard, createComputerGridBoard, renderComputerShipPlacement}

}



function UIController(){

    renderGameBoards().createHumanGridBoard();
    renderGameBoards().createComputerGridBoard();
    renderGameBoards().renderComputerShipPlacement();

}