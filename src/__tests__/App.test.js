const {Ship} = require('../assets/Ship.js');
const {GameController} = require('../assets/App.js');

const Voyager = new Ship(3);
const newGame = GameController();

test('ComputerBoardCreation() should generate a 10 x 10 grid.', () => {
    expect(newGame.ComputerBoardCreation()).toEqual(
        [[null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null]]
    );
});

test('HumanBoardCreation() should generate a 10 x 10 grid.', () => {
    expect(newGame.HumanBoardCreation()).toEqual(
        [[null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null]]
    );
});

test("HumanShipPlacementController() should place the given ship into their respective coordinate provided its valid", () => {
    expect(newGame.HumanShipPlacementController(Voyager, "vertical", 1, 1)).toEqual(
        [[null, null, null, null, null, null, null, null, null, null], 
         [null, {"hitNumber": 0, "length": 3, "sunk": false}, null, null, null, null, null, null, null, null], 
         [null, {"hitNumber": 0, "length": 3, "sunk": false}, null, null, null, null, null, null, null, null], 
         [null, {"hitNumber": 0, "length": 3, "sunk": false}, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null]]
    )
})


test("ComputerGameBoard should reflect new game Grid upon manually adding new Ship object.", () => {
    expect(newGame.ComputerGameBoard.placeShips(Voyager, "horizontal", 4, 3)).toEqual(
        [[null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, {"hitNumber": 0, "length": 3, "sunk": false}, {"hitNumber": 0, "length": 3, "sunk": false}, {"hitNumber": 0, "length": 3, "sunk": false}, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null]]
    )
});

test("HumanAttackController() should attack the given coordinate, return None if there is no ship and hitShip if there is a ship.", () => {
    expect(newGame.HumanAttackController(4, 3)).toEqual(
        [[null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, {"hitNumber": 0, "length": 3, "sunk": false}, {"hitNumber": 0, "length": 3, "sunk": false}, {"hitNumber": 0, "length": 3, "sunk": false}, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null]]
    );

});

test("Verify the final shipArmy property of both Game Boards.", () => {
    expect(newGame.HumanGameBoard.shipArmy).toEqual(
        [{"hitNumber": 0, "length": 5, "sunk": false}, 
         {"hitNumber": 0, "length": 4, "sunk": false}, 
         {"hitNumber": 0, "length": 3, "sunk": false}, 
         {"hitNumber": 0, "length": 3, "sunk": false},             
         {"hitNumber": 0, "length": 2, "sunk": false}]
    );
    expect(newGame.ComputerGameBoard.shipArmy).toEqual(
        [{"hitNumber": 0, "length": 5, "sunk": false}, 
         {"hitNumber": 0, "length": 4, "sunk": false}, 
         {"hitNumber": 0, "length": 3, "sunk": false}, 
         {"hitNumber": 0, "length": 3, "sunk": false},
         {"hitNumber": 0, "length": 2, "sunk": false}]
    );
})

test("Check the final end state of both boards.", () => {
    expect(newGame.HumanGameBoard.gameGrid).toEqual(
      [[null, null, null, null, null, null, null, null, null, null], 
       [null, {"hitNumber": 0, "length": 3, "sunk": false}, null, null, null, null, null, null, null, null], 
       [null, {"hitNumber": 0, "length": 3, "sunk": false}, null, null, null, null, null, null, null, null], 
       [null, {"hitNumber": 0, "length": 3, "sunk": false}, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null]]
    );

    expect(newGame.ComputerGameBoard.gameGrid).toEqual(
      [[null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, {"hitNumber": 0, "length": 3, "sunk": false}, {"hitNumber": 0, "length": 3, "sunk": false}, {"hitNumber": 0, "length": 3, "sunk": false}, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null], 
       [null, null, null, null, null, null, null, null, null, null]]
    );

});

test("GameRestartController() should restart the game in the console by resetting the game board for both players.", () => {
    expect(newGame.GameRestartController()).toEqual("No restart")
});
