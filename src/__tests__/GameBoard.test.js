const {GameBoard} = require('../assets/GameBoard.js');
const {Ship} = require('../assets/Ship.js');

const newGameBoard = new GameBoard();
const newShip = new Ship(3);

test("placeShips() method should place the specified ship in the correct coordinates in the correct orientation.", () => {
    expect(newGameBoard.placeShips(newShip, "horizontal", 3, 4)).toEqual(
        [[null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, {"hitNumber": 0, "length": 3, "sunk": false}, {"hitNumber": 0, "length": 3, "sunk": false}, {"hitNumber": 0, "length": 3, "sunk": false}, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null]]
    );
});

test("receiveAttack() method should evaluate the current GameBoard status and reflect the new hit coordinates.", () => {
    expect(newGameBoard.receiveAttack(3, 4)).toEqual(
        [[null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, "hitShip", {"hitNumber": 1, "length": 3, "sunk": false}, {"hitNumber": 1, "length": 3, "sunk": false}, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null]]
    );

    expect(newGameBoard.receiveAttack(0, 0)).toEqual(
        [["None", null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, "hitShip", {"hitNumber": 1, "length": 3, "sunk": false}, {"hitNumber": 1, "length": 3, "sunk": false}, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null]]
    );
});