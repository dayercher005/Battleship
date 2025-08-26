const {GameController} = require('../assets/App.js');

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
    expect(newGame.HumanShipPlacementController(newGame.PatrolBoat, "vertical", 1, 1)).toEqual(
        [[null, null, null, null, null, null, null, null, null, null], 
        [null, {"hitNumber": 0, "length": 2, "sunk": false}, null, null, null, null, null, null, null, null], 
        [null, {"hitNumber": 0, "length": 2, "sunk": false}, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null]]
    )
})

test("HumanAttackController() should attack the given coordinate, return None if there is no ship and hitShip if there is a ship.", () => {
    expect(newGame.HumanAttackController(0, 0)).toEqual(
        [["None", null, null, null, null, null, null, null, null, null], 
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

test("", () => {
    expect(newGame.HumanGameBoard.shipArmy).toEqual(
        [{"hitNumber": 0, "length": 2, "sunk": false}]
    );
    expect(newGame.ComputerGameBoard.shipArmy).toEqual(
        []
    );
})

test("Check the final end state of both boards.", () => {
    expect(newGame.HumanGameBoard.gameGrid).toEqual(
        [[null, null, null, null, null, null, null, null, null, null], 
         [null, {"hitNumber": 0, "length": 2, "sunk": false}, null, null, null, null, null, null, null, null], 
         [null, {"hitNumber": 0, "length": 2, "sunk": false}, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null], 
         [null, null, null, null, null, null, null, null, null, null]]
    );

    expect(newGame.ComputerGameBoard.gameGrid).toEqual(
        [["None", null, null, null, null, null, null, null, null, null], 
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

test("GameRestartController() should restart the game in the console by resetting the game board for both players.", () => {
    expect(newGame.GameRestartController()).toEqual(false)
});
