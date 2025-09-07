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

    const manualHumanShipPlacement = () => {

        const carrierShip = document.querySelector("#Carrier");
        const battleShip = document.querySelector("#BattleShip");
        const destroyerShip = document.querySelector("#Destroyer");
        const submarineShip = document.querySelector("#Submarine");
        const patrolBoat = document.querySelector("#PatrolBoat");

        const changeDirection = document.querySelector("#directionButton");
        let defaultDirection = "horizontal";


        const CarrierButtonEventListener = (e) => {
            const selectedRow = +e.target.dataset.row;
            const selectedCell = +e.target.dataset.cell

            if(newGame.HumanShipPlacementController(newGame.HumanGameBoard.shipArmy[0], defaultDirection, selectedRow, selectedCell)){
                ownGrid.removeEventListener("click", CarrierButtonEventListener);
                carrierShip.disabled = true;
            }

            UpdateGrid();
        }

        carrierShip.addEventListener("click", () => {
            changeDirection.addEventListener("click", () => {
                defaultDirection === "horizontal" ? defaultDirection = "vertical" : defaultDirection = "horizontal";
            });

            ownGrid.addEventListener("click", CarrierButtonEventListener);
        }, {once: true});
        

        const BattleShipButtonEventListener = (e) => {
            const selectedRow = +e.target.dataset.row;
            const selectedCell = +e.target.dataset.cell

            if(newGame.HumanShipPlacementController(newGame.HumanGameBoard.shipArmy[1], defaultDirection, selectedRow, selectedCell)){
                ownGrid.removeEventListener("click", BattleShipButtonEventListener);
                battleShip.disabled = true;
            }

            UpdateGrid();
        }

        battleShip.addEventListener("click", () => {
            changeDirection.addEventListener("click", () => {
                defaultDirection === "horizontal" ? defaultDirection = "vertical" : defaultDirection = "horizontal";
            });

            ownGrid.addEventListener("click", BattleShipButtonEventListener);
        }, {once: true});


        const DestroyerButtonEventListener = (e) => {
            const selectedRow = +e.target.dataset.row;
            const selectedCell = +e.target.dataset.cell

            if(newGame.HumanShipPlacementController(newGame.HumanGameBoard.shipArmy[2], defaultDirection, selectedRow, selectedCell)){
                ownGrid.removeEventListener("click", DestroyerButtonEventListener);
                destroyerShip.disabled = true;
            }

            UpdateGrid();
        }

        destroyerShip.addEventListener("click", () => {
            changeDirection.addEventListener("click", () => {
                defaultDirection === "horizontal" ? defaultDirection = "vertical" : defaultDirection = "horizontal";
            });

            ownGrid.addEventListener("click", DestroyerButtonEventListener);
        }, {once: true});


        const SubmarineButtonEventListener = (e) => {
            const selectedRow = +e.target.dataset.row;
            const selectedCell = +e.target.dataset.cell

            if(newGame.HumanShipPlacementController(newGame.HumanGameBoard.shipArmy[3], defaultDirection, selectedRow, selectedCell)){
                ownGrid.removeEventListener("click", SubmarineButtonEventListener);
                submarineShip.disabled = true;
            }

            UpdateGrid();
        }

        submarineShip.addEventListener("click", () => {
            changeDirection.addEventListener("click", () => {
                defaultDirection === "horizontal" ? defaultDirection = "vertical" : defaultDirection = "horizontal";
            });

            ownGrid.addEventListener("click", SubmarineButtonEventListener);
        }, {once: true});


        const PatrolBoatButtonEventListener = (e) => {
            const selectedRow = +e.target.dataset.row;
            const selectedCell = +e.target.dataset.cell

            if(newGame.HumanShipPlacementController(newGame.HumanGameBoard.shipArmy[4], defaultDirection, selectedRow, selectedCell)){
                ownGrid.removeEventListener("click", PatrolBoatButtonEventListener);
                patrolBoat.disabled = true;
            }

            UpdateGrid();
        }

        patrolBoat.addEventListener("click", () => {
            changeDirection.addEventListener("click", () => {
                defaultDirection === "horizontal" ? defaultDirection = "vertical" : defaultDirection = "horizontal";
            });

            ownGrid.addEventListener("click", PatrolBoatButtonEventListener);
        }, {once: true});
        
    }

    const renderComputerAttack = () => {
        return newGame.ComputerAttackController();
    };

    const renderHumanAttack = (coordinateX, coordinateY) => {
        return newGame.HumanAttackController(coordinateX, coordinateY);
    }

    const CellClickerValidator = (e) => {
        const selectedRow = +e.target.dataset.row;
        const selectedCell = +e.target.dataset.cell;

        if(renderHumanAttack(selectedRow, selectedCell) === false){
            UIRestartController();
            UpdateGrid();
        } else {
            renderComputerAttack();
            UIRestartController();
            UpdateGrid();
        }

    }

    const CellClicker = () => {
        opponentGrid.addEventListener("click", CellClickerValidator);
    };

    const UIRestartController = () => {
        const restartText = document.querySelector("#gameEndText");
        const restartScreen = document.querySelector("#endDialog");

        if(newGame.GameRestartController() === true){
            restartScreen.showModal();
            restartText.textContent = "Congratulations, you've won!";
        } else if (newGame.GameRestartController() === false){
            restartScreen.showModal();
            restartText.textContent = "Sorry, the computer has won..."
        }

    }

    const UIResetter = () => {
        return newGame.VariablesResetController();
    }

    return {UpdateGrid, 
            randomHumanShipPlacement, 
            manualHumanShipPlacement,
            renderComputerShipPlacement, 
            renderComputerAttack, 
            CellClicker, 
            UIRestartController, 
            UIResetter}

}



function UIInterface(){

    let gameStart = true;

    const startGameButton = document.querySelector("#startButton");
    const randomizeShipsButton = document.querySelector("#randomButton");
    const changeDirection = document.querySelector("#directionButton");
    const restartButton = document.querySelector("#restartButton");
    const restartScreen = document.querySelector("#endDialog");

    const carrierShip = document.querySelector("#Carrier");
    const battleShip = document.querySelector("#BattleShip");
    const destroyerShip = document.querySelector("#Destroyer");
    const submarineShip = document.querySelector("#Submarine");
    const patrolBoat = document.querySelector("#PatrolBoat");
    

    const BattleShipUI = UIEventListeners();

    BattleShipUI.UpdateGrid();
    BattleShipUI.manualHumanShipPlacement();

    randomizeShipsButton.addEventListener("click", () => {
        BattleShipUI.randomHumanShipPlacement();
        BattleShipUI.UpdateGrid();
        carrierShip.disabled = true;
        battleShip.disabled = true;
        destroyerShip.disabled = true;
        submarineShip.disabled = true;
        patrolBoat.disabled = true;
        changeDirection.disabled = true;
        changeDirection.disabled = true;
    });

    const startGameEventListener = (e) => {
        if (
           carrierShip.disabled === true &&
            battleShip.disabled === true &&
            destroyerShip.disabled === true &&
            submarineShip.disabled === true &&
            patrolBoat.disabled === true &&
            gameStart === true
        ){
            startGameButton.removeEventListener("click", e)
            randomizeShipsButton.disabled = true;
            changeDirection.disabled = true;
            BattleShipUI.renderComputerShipPlacement();
            BattleShipUI.CellClicker();
            BattleShipUI.UpdateGrid();
            gameStart = false;
        } else {
            startGameButton.removeEventListener("click", e);
        }
    }

    startGameButton.addEventListener("click", startGameEventListener);

    restartButton.addEventListener("click", () => {
        restartScreen.close();
        BattleShipUI.UIResetter();
        BattleShipUI.UpdateGrid();
        randomizeShipsButton.disabled = false;
        carrierShip.disabled = false;
        battleShip.disabled = false;
        destroyerShip.disabled = false;
        submarineShip.disabled = false;
        patrolBoat.disabled = false;
        changeDirection.disabled = false;
        gameStart = true;
    })
    
}
