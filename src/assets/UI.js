import {AppController} from "./App.js";
import {GameBoard} from "./GameBoard.js"

export {renderGameBoards}

function renderGameBoards() {

    const ownGrid = document.querySelector("#ownGrid");
    const opponentGrid = document.querySelector("#opponentGrid");

    const newGameBoard = new GameBoard();

    newGameBoard.gameGrid.forEach((row) => {
        row.forEach(() => {
            const cellButton = document.createElement("div");
            cellButton.classList.add("cellButton");
            
            ownGrid.appendChild(cellButton);
        })
    })

    newGameBoard.gameGrid.forEach((row) => {
        row.forEach(() => {
            const cellButton = document.createElement("div");
            cellButton.classList.add("cellButton");
            
            opponentGrid.appendChild(cellButton);
        })
    })


}