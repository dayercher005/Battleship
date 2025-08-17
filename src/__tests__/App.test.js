const {GameController} = require('../assets/App.js');
const {GameBoard} = require('../assets/GameBoard.js');
const {Ship} = require('../assets/Ship.js');

const newBoard = new GameBoard;
const newShip = new Ship(4, 0, 1);
const LongerShip = new Ship(5, 0, 2)

test("", () => {
    expect(newBoard.placeShips(newShip, "horizontal", 3, 4)).toEqual(
        [[null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, 1, 1, 1, 1, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null]]

    );

    expect(newBoard.placeShips(LongerShip, "horizontal", 3, 3)).toEqual(
        false
    );

    expect(newBoard.placeShips(LongerShip, "horizontal", 0, 0)).toEqual(
        [[2, 2, 2, 2, 2, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, 1, 1, 1, 1, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null]]
    )

});

