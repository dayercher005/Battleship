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

        HumanBoard.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                const cellButton = document.createElement("button");
                cellButton.classList.add("humanCellButton");
                cellButton.dataset.row = rowIndex;
                cellButton.dataset.cell = cellIndex;

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
                cellButton.classList.add("computerCellButton");
                cellButton.dataset.row = rowIndex;
                cellButton.dataset.cell = cellIndex;

                if (cell === "None") {
                    cellButton.textContent = "X";
                } else if (!cell){
                    cellButton.setAttribute("style", "background-color: white;")
                } else if (cell === "hitShip"){
                    cellButton.setAttribute("style", "background-color: pink;")
                    cellButton.textContent = "X";
                } else{
                    cellButton.setAttribute("style", "background-color: white;");
                }
                

                cellButton.addEventListener("mouseenter", () => {
                    cellButton.setAttribute("styles", "background:hsl(0, 0%, 85%);")
                })

                opponentGrid.appendChild(cellButton);
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
    };

    const renderHumanAttack = (coordinateX, coordinateY) => {
        newGame.HumanAttackController(coordinateX, coordinateY);
    }

    const CellClicker = () => {
        opponentGrid.addEventListener("click", (e) => {
            const selectedRow = e.target.dataset.row;
            const selectedCell = e.target.dataset.cell;

            renderHumanAttack(selectedRow, selectedCell);
            renderComputerAttack();
            UIRestartController();
            UpdateGrid();
        });
    };

    const UIRestartController = () => {
        const restartText = document.querySelector("#gameEndText");
        const restartScreen = document.querySelector("#endDialog");

        if(newGame.GameRestartController() === true){
            restartScreen.showModal();
            restartText.textContent = "Congratulations, you've won!";
        } else if (newGame.GameRestartController() === true){
            restartScreen.showModal();
            restartText.textContent = "Sorry, the computer has won..."
        }

    }

    return {UpdateGrid, randomHumanShipPlacement, renderComputerShipPlacement, renderComputerAttack, CellClicker, UIRestartController}

}



function UIInterface(){

    const startGameButton = document.querySelector("#startButton");
    const randomizeShipsButton = document.querySelector("#randomButton");
    const restartButton = document.querySelector("#restartButton");
    const restartScreen = document.querySelector("#endDialog");

    const BattleShipUI = UIEventListeners();

    BattleShipUI.UpdateGrid();

    randomizeShipsButton.addEventListener("click", () => {
        BattleShipUI.randomHumanShipPlacement();
        BattleShipUI.UpdateGrid();
    });


    startGameButton.addEventListener("click", () => {
        BattleShipUI.renderComputerShipPlacement();
        BattleShipUI.CellClicker();
        BattleShipUI.UpdateGrid();
    });

    restartButton.addEventListener("click", () => {
        restartScreen.close();
        UIInterface();
    })
    
}
