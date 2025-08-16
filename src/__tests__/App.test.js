const {GameController} = require('../assets/App.js');
const {GameBoard} = require('../assets/GameBoard.js');
const {Ship} = require('../assets/Ship.js')

const newGameBoard = new GameBoard();
const newShip = new Ship(2, 0, 4);

test("" ,() => {
    expect(newGameBoard.placeShips(newShip, "horizontal", 2, 4)).toEqual(
        [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 4, 4, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    );

    expect(newGameBoard.placeShips(newShip, "horizontal", 7, 5)).toEqual(
        [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 4, 4, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 4, 4, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    )
});


