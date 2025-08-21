import {GameController} from "./App.js";

export {UIInterface, UIEventListeners}

function UIEventListeners() {

    const newGame = GameController();

    const ownGrid = document.querySelector("#ownGrid");
    const opponentGrid = document.querySelector("#opponentGrid");

    const UpdateGrid = () => {
        ownGrid.innerHTML = "";
        opponentGrid.innerHTML = "";

        const HumanBoard = newGame.HumanBoardCreation();
        const ComputerBoard = newGame.ComputerBoardCreation();
        console.log(HumanBoard);


        HumanBoard.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                const cellButton = document.createElement("button");
                cellButton.classList.add("cellButton");
                cellButton.classList.add("humanCell");
                cellButton.dataset.row = rowIndex;
                cellButton.dataset.row = cellIndex;

                if (cell === "None") {
                    cellButton.textContent = "X";
                } else if (cell === "hitShip") {
                    cellButton.setAttribute("style", "background-color: pink");
                    cellButton.textContent = "X";
                } else if (!cell){
                    cellButton.setAttribute("style", "background-color: white;");
                } else{
                    cellButton.setAttribute("style", "background-color: red");
                }

                ownGrid.appendChild(cellButton)
            })
        });

        ComputerBoard.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                const cellButton = document.createElement("button");
                cellButton.classList.add("cellButton");
                cellButton.classList.add("computerCell");
                cellButton.dataset.row = rowIndex;
                cellButton.dataset.row = cellIndex;

                if (cell === "None") {
                    cellButton.textContent = "X";
                } else if (cell === "hitShip") {
                    cellButton.setAttribute("style", "background-color: pink");
                    cellButton.textContent = "X";
                } else if (!cell){
                    cellButton.setAttribute("style", "background-color: white");
                } else{
                    cellButton.setAttribute("style", "background-color: red");
                }

                opponentGrid.appendChild(cellButton)
            })
        });
    }


    const renderComputerShipPlacement = () => {

        newGame.ComputerRandomPlacementController();
           
    }

    const randomHumanShipPlacement = () => {

        newGame.HumanRandomPlacementController();
        
    };

    const renderComputerAttack = () => {
        
        newGame.ComputerAttackController();
        
    }

    return {UpdateGrid, randomHumanShipPlacement ,renderComputerShipPlacement, renderComputerAttack}

}



function UIInterface(){

    const startGameButton = document.querySelector("#startButton");
    const randomizeShipsButton = document.querySelector("#randomButton");

    const BattleShipUI = UIEventListeners();

    BattleShipUI.UpdateGrid();

    randomizeShipsButton.addEventListener("click", () => {
        BattleShipUI.randomHumanShipPlacement();
        BattleShipUI.UpdateGrid();
    });

    startGameButton.addEventListener("click", () => {
        BattleShipUI.renderComputerAttack();
        BattleShipUI.UpdateGrid();
    })
    
}
